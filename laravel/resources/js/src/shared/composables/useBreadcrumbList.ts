import { usePage } from '@inertiajs/vue3';
import { computed, watchEffect } from 'vue';

interface BreadcrumbItem {
  '@id': string;
  name: string;
}

interface BreadcrumbListSchema {
  '@context': string;
  '@type': string;
  itemListElement: BreadcrumbListItem[];
}

interface BreadcrumbListItem {
  '@type': string;
  position: number;
  item: BreadcrumbItem;
}

interface BreadcrumbInput {
  name: string;
  url: string;
}

export function useBreadcrumbSchema() {
  const page = usePage();

  const breadcrumbs = computed<BreadcrumbInput[]>(() => {
    return (page.props.breadcrumbs as BreadcrumbInput[]) || [];
  });

  const generateSchema = (): BreadcrumbListSchema | null => {
    if (breadcrumbs.value.length === 0) {
      return null;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.value.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': crumb.url,
          name: crumb.name,
        },
      })),
    };
  };

  const updateSchema = (): void => {
    // Проверяем, что мы в браузерном окружении (не в SSR)
    if (typeof document === 'undefined') {
      return;
    }

    const oldScript = document.querySelector<HTMLScriptElement>('script[data-schema="breadcrumb"]');
    if (oldScript) {
      oldScript.remove();
    }

    const schema = generateSchema();
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'breadcrumb');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  };

  // Вызываем updateSchema только в браузерном окружении
  if (typeof document !== 'undefined') {
    updateSchema();

    watchEffect(() => {
      updateSchema();
    });
  }

  return {
    generateSchema,
  };
}

import { router, useForm } from '@inertiajs/vue3';
import { defineStore } from 'pinia';
import { route } from 'ziggy-js';

// Безопасная функция для получения queryParams
// В SSR режиме route() может быть не инициализирован на верхнем уровне модуля
const getQueryParams = () => {
  try {
    const router = route();
    // Убеждаемся, что queryParams всегда объект
    return router?.queryParams || {};
  } catch (e) {
    // Если route() не инициализирован, возвращаем пустой объект
    return {};
  }
};

export const useFiltersStore = defineStore('filters', () => {
  const queryParams = getQueryParams();
  
  const filters = useForm({
    price_from: queryParams?.price_from ? Number(queryParams.price_from) : undefined,
    price_to: queryParams?.price_to ? Number(queryParams.price_to) : undefined,
    weight_from: queryParams?.weight_from ? Number(queryParams.weight_from) : undefined,
    weight_to: queryParams?.weight_to ? Number(queryParams.weight_to) : undefined,
    box_type: queryParams?.box_type ?? [],
    brands: queryParams?.brands ?? [],
    fast_tag: queryParams?.fast_tag ?? [],
    sort: queryParams?.sort,
    page: queryParams?.page ? Number(queryParams?.page) : 1,
    search: queryParams?.search ?? '',
    cashback_percent: queryParams?.cashback_percent ? Number(queryParams?.cashback_percent) : undefined,
  });

  const resetFilters = () => {
    filters.weight_to = undefined;
    filters.weight_from = undefined;
    filters.price_from = undefined;
    filters.price_to = undefined;
    filters.cashback_percent = undefined;
    filters.box_type = [];
    filters.brands = [];

    applyFilters(true);
  };

  const onChangeCategory = () => {
    filters.weight_to = undefined;
    filters.weight_from = undefined;
    filters.price_from = undefined;
    filters.price_to = undefined;
    filters.box_type = [];
    filters.brands = [];
    filters.sort = undefined;
    filters.search = '';
    filters.fast_tag = [];
    filters.page = 1;
    filters.cashback_percent = undefined;
  };

  const applyFilters = (resetPage: boolean = false): Promise<void> => {
    return new Promise<void>((resolve) => {
      if (resetPage) {
        filters.page = 1;
      }
      const catalogUrl = route('catalog.index', { category: route().params?.category });
      filters.get(catalogUrl, {
        only: ['products', 'is_products_group', 'filter_data', 'search'],
      });
      resolve();
    });
  };

  router.on('navigate', () => {
    filters.search = route().queryParams?.search ?? '';
  });

  return {
    filters,
    resetFilters,
    applyFilters,
    onChangeCategory,
  };
});

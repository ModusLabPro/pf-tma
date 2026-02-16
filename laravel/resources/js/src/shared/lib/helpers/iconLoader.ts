import { Component, defineComponent, h } from 'vue';

// TODO подумать как переименовать
export const iconLoader = () => {
  const cache: Map<string, Component> = new Map<string, Component>();

  return async (link: string): Promise<Component> => {
    return new Promise<Component>((resolve) => {
      if (cache.has(link)) {
        return resolve(cache.get(link) as Component);
      }
      fetch(link)
        .then((res) => res.text())
        .then((text) => {
          const formatted = text.replace(/#([a-fA-F0-9]{6})/g, 'currentColor');
          const comp = defineComponent(() => {
            return () => h('span', { innerHTML: formatted });
          });
          cache.set(link, comp);
          resolve(comp);
        });
    });
  };
};

// Заглушка для ziggy-js в SSR режиме
// Экспортирует функцию route(), которая использует глобальную переменную

// Создаем функцию route() с безопасными значениями по умолчанию
const getRouteFn = () => {
  // Проверяем, доступна ли глобальная функция route()
  if (typeof global !== 'undefined' && global.route) {
    return global.route;
  }
  if (typeof globalThis !== 'undefined' && globalThis.route) {
    return globalThis.route;
  }
  // Если глобальная функция не доступна, возвращаем заглушку
  return null;
};

export const route = (...args) => {
  const routeFn = getRouteFn();
  
  // Если route() вызывается без аргументов, возвращаем Router объект
  if (args.length === 0) {
    if (routeFn) {
      const result = routeFn();
      // Убеждаемся, что queryParams и params всегда объекты
      // Используем Object.create для создания объекта с геттерами, если нужно
      const queryParams = result?.queryParams || {};
      const params = result?.params || {};
      
      // Создаем объект с гарантированными объектами для queryParams и params
      // Это предотвращает ошибку "Cannot convert undefined or null to object"
      const routerObj = {
        current: result?.current || (() => null),
        url: result?.url || '',
      };
      
      // Устанавливаем queryParams и params как собственные свойства
      // Это гарантирует, что они всегда будут объектами
      Object.defineProperty(routerObj, 'queryParams', {
        get: () => queryParams,
        enumerable: true,
        configurable: true,
      });
      
      Object.defineProperty(routerObj, 'params', {
        get: () => params,
        enumerable: true,
        configurable: true,
      });
      
      return routerObj;
    }
    // Если глобальная функция не доступна, возвращаем пустой объект с гарантированными объектами
    const emptyRouter = {
      current: () => null,
      url: '',
    };
    
    Object.defineProperty(emptyRouter, 'queryParams', {
      get: () => ({}),
      enumerable: true,
      configurable: true,
    });
    
    Object.defineProperty(emptyRouter, 'params', {
      get: () => ({}),
      enumerable: true,
      configurable: true,
    });
    
    return emptyRouter;
  }
  
  // Если route() вызывается с аргументами, используем глобальную функцию
  if (routeFn) {
    return routeFn(...args);
  }
  
  // Если глобальная функция не доступна, возвращаем пустую строку
  return '';
};

export const ZiggyVue = {
  install(app, options) {
    // ZiggyVue будет настроен позже в ssr.js
  },
};

export default {
  route,
  ZiggyVue,
};


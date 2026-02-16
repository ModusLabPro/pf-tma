// Заглушка для vue-yandex-maps в SSR режиме
// В SSR режиме карты не рендерятся, поэтому возвращаем пустые компоненты

export const YandexMap = {
  name: 'YandexMap',
  render: () => null,
};

export const YandexMapDefaultFeaturesLayer = {
  name: 'YandexMapDefaultFeaturesLayer',
  render: () => null,
};

export const YandexMapDefaultMarker = {
  name: 'YandexMapDefaultMarker',
  render: () => null,
};

export const YandexMapDefaultSchemeLayer = {
  name: 'YandexMapDefaultSchemeLayer',
  render: () => null,
};

export const createYmaps = () => {
  return Promise.resolve({});
};

export default {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  createYmaps,
};


<script setup lang="ts">
import type { LngLat } from '@yandex/ymaps3-types';

import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';

defineProps<{
  zoom: number;
  center: LngLat;
  width?: string;
  height: string;
}>();
</script>

<template>
  <yandex-map
    :settings="{
      location: {
        center,
        zoom,
      },
    }"
    :width="width"
    :height="height"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <slot name="marker">
      <yandex-map-default-marker :settings="{ coordinates: [37.428551, 55.697471], title: 'Прайм фудс' }" />
    </slot>
  </yandex-map>
</template>

<style scoped></style>

import { usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { defineStore } from 'pinia';
import { computed, shallowRef, watch } from 'vue';

import { ICity } from '@/entities/city';
import { IPickUpLocation } from '@/entities/pick-up-location';

export const usePickupLocationsStore = defineStore('pickupLocations', () => {
  const page = usePage<{
    pickupLocations: IPickUpLocation[];
  }>();

  const locationsList = shallowRef<IPickUpLocation[]>([...(page.props.pickupLocations ?? [])]);

  const selectedLocation = shallowRef<IPickUpLocation>();

  const selectedCity = shallowRef<ICity>();

  const locationCoordinates = computed<[number, number]>(() => {
    if (selectedLocation.value && selectedLocation.value.longitude && selectedLocation.value.latitude) {
      return [Number(selectedLocation.value.longitude), Number(selectedLocation.value.latitude)];
    }
    if (selectedCity.value && selectedCity.value.longitude && selectedCity.value.latitude) {
      return [Number(selectedCity.value.longitude), Number(selectedCity.value.latitude)];
    }
    return [37.6176, 55.7558];
  });

  const getLocations = async (city_id: number): Promise<void> => {
    // Не выполняем HTTP запросы во время SSR
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      const res = await axios.get<{ data: { pickupLocations: IPickUpLocation[] } }>(route('order.pickup-location-by-city.get'), {
        params: { city_id },
      });
      locationsList.value = [...res.data.data.pickupLocations];
    } catch (e) {
      console.error(e);
    }
  };

  watch(selectedCity, () => {
    selectedLocation.value = undefined;
  });

  const resetStore = (): void => {
    locationsList.value = [...(page.props.pickupLocations ?? [])];
    selectedLocation.value = undefined;
    selectedCity.value = undefined;
  };

  return {
    locationsList,
    selectedLocation,
    selectedCity,
    locationCoordinates,

    getLocations,
    resetStore,
  };
});

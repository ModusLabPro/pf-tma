import type { IOrderCalculateRequestDTO } from '../api';
import type { IOrderCalculation } from '../model/orderCalculate';

import { reactive, shallowRef } from 'vue';

import { getOrderCalculateApi } from '../api';

export const useOrderCalculate = () => {
  const calculateData = shallowRef<IOrderCalculation | null>(null);
  const loading = shallowRef<boolean>(false);

  const calculationModel: IOrderCalculateRequestDTO = reactive({
    delivery_date: undefined,
    product_id: undefined,
    combo_id: undefined,
    promo: undefined,
    delivery_type: undefined,
    pickup_location_id: undefined,
    delivery_zone_id: undefined,
    address_id: undefined,
    delivery_time_to: undefined,
    delivery_time_from: undefined,
    city_id: undefined,
    use_expiring_bonuses: false,
  });

  const calculateOrder = async (): Promise<void> => {
    try {
      loading.value = true;
      const { data } = await getOrderCalculateApi(calculationModel);

      calculateData.value = { ...data };
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    calculateData,
    loading,
    calculationModel,

    calculateOrder,
  };
};

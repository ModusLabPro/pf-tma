import type { IOrderCalculation } from '../model/orderCalculate';

import axios from 'axios';

interface IOrderCalculateResponseDTO {
  data: IOrderCalculation;
}

export interface IOrderCalculateRequestDTO {
  product_id?: number;
  combo_id?: number;
  delivery_type?: 'courier' | 'pickup';
  promo?: string;
  pickup_location_id?: number;
  delivery_zone_id?: number;
  address_id?: number;
  delivery_date?: Date;
  delivery_time_from?: string;
  delivery_time_to?: string;
  city_id?: number;
  use_expiring_bonuses: boolean;
}

export const getOrderCalculateApi = (params: IOrderCalculateRequestDTO): Promise<IOrderCalculateResponseDTO> => {
  // Не выполняем HTTP запросы во время SSR
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Cannot make HTTP requests during SSR'));
  }

  return new Promise<IOrderCalculateResponseDTO>((resolve, reject) => {
    axios
      .get<IOrderCalculateResponseDTO>('/order/calculate', {
        params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

import { Nullable } from '@/shared/lib/utility-types/Nullable';

interface IDeliveryDetail {
  delivery_zone_time_min: Nullable<number>;
  delivery_date: Nullable<string>;
  delivery_time_from: Nullable<string>;
  delivery_time_to: Nullable<string>;
  city: Nullable<string>;
  address_full: Nullable<string>;
  delivery_zone_name: Nullable<string>;
  delivery_zone_description: Nullable<string>;
  pickup_location_name: Nullable<string>;
  pickup_location_address: Nullable<string>;
  delivery_price: number;
  delivery_zone_min_order_sum: Nullable<number>;
  pickup_location_time_min: Nullable<number>;
}

interface IOrderDetail {
  bonus_spent: number;
  bonus_spent_limit: number;
  cart_sum: number;
  delivery_price: number;
  weight: number;
  quantity: number;
  personal_discount: number;
  promocode_discount: number;
  price_final: number;
  second_item_discount: Nullable<number>;
}

export interface IOrderCalculation {
  delivery_detail: IDeliveryDetail;
  order_detail: IOrderDetail;
}

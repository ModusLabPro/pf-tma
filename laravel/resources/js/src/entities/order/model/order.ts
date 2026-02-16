import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IOrderDetail {
  cart_sum: number;
  delivery_price: number;
  weight: number;
  quantity: number;
  personal_discount: number;
  promocode_discount: number;
  price_final: number;
  second_item_discount: Nullable<number>;
}

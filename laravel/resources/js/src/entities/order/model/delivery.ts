import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IDeliveryDetail {
  delivery_zone_time_min: string;
  delivery_date: string;
  delivery_time_from: string;
  delivery_time_to: string;
  city: Nullable<string>;
  address_full: Nullable<string>;
  delivery_zone_name: Nullable<string>;
  delivery_zone_description: Nullable<string>;
  pickup_location_name: Nullable<string>;
  pickup_location_address: Nullable<string>;
  delivery_price: number;
}

type IDeliveryStatus = 'В обработке' | 'Отменён'  | 'Новый' | 'Ожидает оплаты' | 'Оплачен' | 'Подтвержден' | 'В работе/в сборке' | 'Отправлен/в пути' | 'Готов к выдаче' | 'Выполнен';

export interface IDelivery {
  id: number;
  order_number: Nullable<string>;
  status: IDeliveryStatus;
  delivery_date: string;
  product_count: number;
  order_price: string;
  created_at: string;
}

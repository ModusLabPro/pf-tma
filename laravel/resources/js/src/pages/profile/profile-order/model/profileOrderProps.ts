import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

interface IOrderData {
  city: string;
  address: string;
  email: string;
  phone: string;
  user_fio: string;
  delivery_zone_name: Nullable<string>;
  delivery_zone_description: Nullable<string>;
}

interface IBrand {
  id: number;
  name: string;
  explanation: string;
  parent_brand: Nullable<IBrand>;
}

interface IUserOrder {
  id: number;
  code: string;
  order_number: Nullable<number>;
  status:
    | 'В обработке'
    | 'Отменён'
    | 'Новый'
    | 'Ожидает оплаты'
    | 'Оплачен'
    | 'Подтвержден'
    | 'В работе/в сборке'
    | 'Отправлен/в пути'
    | 'Готов к выдаче'
    | 'Выполнен';
  order_price: string;
  order_weight: string;
  order_item_count: number;
  order_sale: Nullable<string>;
  promocode_discount: string;
  delivery_price: string;
  created_at: string;
  order_data: IOrderData;
  items: IUserOrderPosition[];
  price_final_1c: Nullable<string>;
  price_final: string;
  comment: Nullable<string>;
  delivery_date: Nullable<string>;
  second_item_discount: Nullable<number>;
  formatedItems: IUserOrderPosition[];
  payment_link: Nullable<string>;
}

interface IUserOrderPosition {
  id: number;
  type: 'Product' | 'Combo';
  price: string;
  price_for_unit: string;
  price_for_unit_without_sale: string;
  unit_sale_percent: number;
  price_without_sale: number;
  quantity: number;
  weight: string;
  weight_type: string;
  item: IUserOrderItem;
}

interface IUserOrderItem {
  id: number;
  article: string;
  name: string;
  weight_type: string;
  price: string;
  sale_percent: number;
  price_type: string;
  sale_price: string;
  type_of_packing: string;
  second_item_discount_percent: Nullable<number>;
  brands: IBrand[];
  images: TFile[];
}

export interface IProfileOrderProps {
  order: IUserOrder;
}

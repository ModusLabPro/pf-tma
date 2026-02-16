import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IUserOrder {
  id: number;
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
  delivery_price: string;
  delivery_date: string;
  transaction_method: Nullable<string>;
  product_count: number;
  order_sale: Nullable<string>;
  created_at: string;
  price_final_1c: Nullable<string>;
  price_final: string;
  payment_link: Nullable<string>;
}

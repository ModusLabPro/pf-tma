import { IProduct } from '@/entities/products/@x/alert';
import { IPromo } from '@/entities/promo/@x/alert';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IAlert {
  id: number;
  type: string;
  title: string;
  message: string;
  button_text: string;
  button_link: string;
  is_read: boolean;
  bonus_message: Nullable<string>;
  bonus_count: Nullable<number>;
  bonus_date: string;
  read_at: Nullable<string>;
  created_at: string;
}

interface IBasePromoAlert {
  id: number;
  button_link: string;
  is_read: boolean;
  created_at: string;
}

export interface IPromoAlertPromo extends IBasePromoAlert {
  type: 'Акция';
  item: IPromo;
}

export interface IPromoAlertProduct extends IBasePromoAlert {
  type: 'Новинка';
  item: IProduct;
}

export type TPromoAlert = IPromoAlertPromo | IPromoAlertProduct;

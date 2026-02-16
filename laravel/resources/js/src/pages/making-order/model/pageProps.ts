import type { ICart, ICartItem } from '@/entities/cart/model/cart';
import type { ICity } from '@/entities/city';
import type { Nullable } from '@/shared/lib/utility-types/Nullable';

import { IContactMethod } from '@/entities/address/model/addressTypes';
import { IUser } from '@/entities/user';
import { TBanner } from '@/shared/banner';
import { TFile } from '@/shared/file';

export interface IProps {
  transactionMethods: {
    name: string;
    id: number;
    description: Nullable<string>;
    icon: Nullable<TFile>;
  }[];
  cartItems: ICartItem[];
  promocodeStatus: 'active' | 'inactive' | 'expired' | 'exceeded_limit';
  allContactMethods: IContactMethod[];
  auth: {
    user: Nullable<IUser>;
  };
  cities: Array<ICity>;
  cart: ICart;
  banners: TBanner[];
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
}

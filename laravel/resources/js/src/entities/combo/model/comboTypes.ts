import { IProduct } from '@/entities/products/@x/combo';
import { IReview } from '@/entities/review/@x/combo';
import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ICombo {
  id: number;
  count_in_cart: number;
  name: string;
  short_description: string;
  price: number;
  sale_price: number;
  sale_percent: number;
  quantity: 'Много' | 'Мало' | 'Под заказ';
  price_type: string;
  images: TFile[];
  cashback_percent?: Nullable<number>;
}

export interface IComboDetail {
  id: number;
  count_in_cart: number;
  name: string;
  short_description: string;
  description: string;
  price: number;
  sale_price: number;
  sale_percent: number;
  price_type: string;
  article_number: string;
  quantity: 'Много' | 'Мало' | 'Под заказ';
  weight: number;
  weight_type: string;
  seo_title: Nullable<string>;
  seo_description: Nullable<string>;
  images: TFile[];
  first_image: TFile;
  reviews_count: number;
  average_rating: number;
  reviews: IReview[];
  products: IProduct[];
}

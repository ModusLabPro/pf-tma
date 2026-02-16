import { IReview } from '@/entities/review/@x/product';
import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

interface IBrand {
  id: number;
  name: string;
  explanation: string;
  parent_brand: Nullable<IBrand>;
}

interface ITag {
  id: number;
  name: string;
  slug: string;
}

interface IAttribute {
  attribute_id: number;
  attribute_name: Nullable<string>;
  attribute_slug: Nullable<string>;
  explanation: Nullable<string>;
  id: number;
  isFirstAttribute: boolean;
  value: null;
}

export interface IProduct {
  id: number;
  article_number: Nullable<number>;
  name: string;
  price: string;
  degree_type: 'chilled' | 'frozen';
  sale_price: Nullable<string>;
  quantity: 'Много' | 'Мало' | 'Под заказ';
  images: TFile[];
  short_description: string;
  weight: string;
  count_in_cart: number;
  is_new: boolean;
  sale_percent: Nullable<number>;
  slug: string;
  seo_description: Nullable<string>;
  seo_title: Nullable<string>;
  is_wishlist: boolean;
  brands: IBrand[];
  tags: ITag[];
  type: string;
  is_have_gift: boolean;
  weight_type: string;
  price_type: string;
  attributes: IAttribute[];
  cashback_percent: Nullable<number>;
}

interface IOrderedProductItem {
  id: number;
  article: string;
  name: string;
  weight_type: string;
  price: string;
  sale_percent: number;
  price_type: string;
  sale_price: string;
  brands: Nullable<IBrand[]>;
  images: TFile[];
}

export interface IOrderedProduct {
  id: number;
  type: 'Product' | 'Combo';
  price: string;
  price_for_unit: string;
  quantity: number;
  weight: string;
  unit_sale_percent: number;
  price_for_unit_without_sale: string;
  weight_type: string;
  item: IOrderedProductItem;
}

export interface IReviewedProduct extends IReview {
  status: 'На модерации' | 'Активен' | 'Отклонён' | 'Удалён пользователем';
  item: IProduct;
  slug: string;
  item_type: string;
  bonus_awarded: boolean;
  name: string;
}

export interface IProductsPendingReview extends IProduct {
  item: IProduct;
}

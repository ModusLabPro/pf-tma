import type { IProduct } from '@/entities/products/@x/cart';

import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

interface IBaseCartItem {
  id: number;
  item_price: number;
  quantity: number;
  total_price: number;
  sale_percent: Nullable<number>;
  total_price_without_sale: Nullable<number>;
  second_item_discount_amount: Nullable<number>;
  second_item_discount_percent: number;
  is_available: boolean;
  is_gift: boolean;
  can_delete: boolean;
}

interface ISingleProductCartItem extends IBaseCartItem {
  is_combo: false;
  item: Omit<IProduct, 'quantity' | 'short_description' | 'seo_description' | 'seo_title' | 'is_wishlist' | 'type'>;
}

interface IComboProductsCartItem extends IBaseCartItem {
  is_combo: true;
  item: {
    id: number;
    description: string;
    article_number: number;
    images: TFile[];
    name: string;
    price: string;
    sale_price: string;
    cashback_percent: Nullable<number>;
    products: {
      id: number;
      name: string;
      price: number;
    }[];
  };
}

export type ICartItem = ISingleProductCartItem | IComboProductsCartItem;

export interface ICart {
  cartPrice: number;
  cartQuantity: number;
  cartWeight: number;
  second_item_discount_total: number;
  items: Array<ICartItem>;
  formatedItems: Array<ICartItem & { gift_items: Nullable<ICartItem[]> }>;
}

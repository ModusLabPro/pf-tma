import { IProduct } from '@/entities/products';
import { TFile } from '@/shared/file';

export interface IPromo {
  id: number;
  image: TFile;
  name: string;
  type: string;
  sale_percent: number;
  short_description: string;
  days_left: number;
  end_date: string;
}

export interface IPromoTypes {
  name: string;
  type: 'discount' | 'gift' | 'seasonal';
}

type TPromoProduct = {
  item_type: 'product' | 'combo';
  is_combo: boolean;
  item: IProduct;
};

export interface IPromoDetails extends IPromo {
  short_description: string;
  items: TPromoProduct[];
}

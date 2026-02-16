import { IProduct } from '@/entities/products';
import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ICombination {
  id: number;
  description: string;
  name: string;
  image: TFile;
  seo_description: Nullable<string>;
  seo_title: Nullable<string>;
}

export interface ICombinationVariant {
  id: number;
  name: string;
  description: string;
  image: TFile;
  products?: IProduct[];
}

export interface ICombinationDetail {
  id: number;
  name: string;
  description: string;
  cooking_method: string;
  image: TFile;
  product: IProduct;
  garnish_title: string;
  garnishes: ICombinationVariant[];
  sauce_title: string;
  sauces: ICombinationVariant[];
  drink_title: string;
  drinks: ICombinationVariant[];
  seo_description: Nullable<string>;
  seo_title: Nullable<string>;
}

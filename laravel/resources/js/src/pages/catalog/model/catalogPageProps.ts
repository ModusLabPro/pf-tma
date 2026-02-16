import { ICombination } from '@/entities/combination';
import { IProduct } from '@/entities/products';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ICatalogCategory {
  id: number;
  name: string;
  slug: string;
  path: string;
  parent_category_id: Nullable<number>;
  children: ICatalogCategory[];
  icon_path: Nullable<string>;
}

export type TargetCategory = {
  id: number;
  name: string;
  slug: string;
  path: string;
  parent: Nullable<TargetCategory>;
};

export interface ICategoryMeta {
  __meta__: boolean;
  second_item_discount_percent: number;
}

export type TCatalogProducts = {
  current_page: number;
  first_page_url: string;
  last_page_url: string;
  from: number;
  last_page: number;
  next_page_url: Nullable<string>;
  path: string;
  per_page: number;
  prev_page_url: Nullable<string>;
  to: number;
  total: number;
  links: {
    active: boolean;
    label: string;
    url: Nullable<string>;
  }[];
  data: Record<string, IProduct[]> | IProduct[];
};

export type TFastFilterTag = {
  id: number;
  name: string;
  slug: string;
};

export type ICatalogPageProps = {
  categories: ICatalogCategory[];
  is_products_group: boolean;
  products: TCatalogProducts;
  category_target: Nullable<TargetCategory>;
  fast_filter_tags: TFastFilterTag[];
  products_recommended: IProduct[];
  combinations: ICombination[];
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
};

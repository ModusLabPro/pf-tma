import { ICity } from '@/entities/city';
import { ICombination } from '@/entities/combination';
import { IProduct } from '@/entities/products';
import { IRecipe } from '@/entities/recipes/model';
import { IReview } from '@/entities/review';
import { IUser } from '@/entities/user';
import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

interface IBrand {
  id: number;
  name: string;
  explanation: string;
  parent_brand: Nullable<IBrand>;
}

interface IAttribute {
  id: number;
  attribute_id: number;
  attribute_name: string;
  attribute_slug: string;
  value: string;
  explanation: string;
  isFirstAttribute: boolean;
}

interface ITag {
  id: number;
  name: string;
}

interface ICategory {
  id: number;
  name: string;
  slug: string;
  parent_category_id: Nullable<number>;
  children: ICategory[];
  icon_path: Nullable<string>;
}

interface ICutting {
  content: string;
  button_link: string;
  button_text: string;
  video_link: string;
  image: TFile;
}

interface IManufacturer {
  name: string;
  content: string;
  image: TFile;
}

interface IVideo {
  id: number;
  filename: string;
  video_url: string;
  poster_url: number;
  preview: { url: string };
}

export interface IProductDetail {
  id: number;
  article_number: number;
  name: string;
  description: string;
  degree_type: 'chilled' | 'frozen';
  count_in_cart: number;
  short_description: string;
  weight: string;
  weight_type: string;
  quantity: 'Много' | 'Мало' | 'Под заказ';
  price: string;
  price_type: string;
  sale_price: string;
  sale_percent: number;
  slug: string;
  is_wishlist: boolean;
  is_new: boolean;
  reviews_count: number;
  average_rating: string;
  images: TFile[];
  brands: IBrand[];
  is_have_gift: boolean;
  attributes: IAttribute[];
  tags: ITag[];
  reviews: IReview[];
  categories: ICategory[];
  cutting: ICutting;
  manufacturer: IManufacturer;
  videos: IVideo[];
  second_item_discount_percent: Nullable<number>;
  seo_description: Nullable<string>;
  seo_title: Nullable<string>;
  cashback_percent: Nullable<number>;
  gift_product: Nullable<IProductDetail>;
}

export interface IProductPageProps {
  product: IProductDetail;
  recomended_recipes: IRecipe[];
  recommended_products: IProduct[];
  user_purchased_products: IProduct[];
  auth: {
    user: Nullable<IUser>;
  };
  cities: ICity[];
  combinations: ICombination[];
}

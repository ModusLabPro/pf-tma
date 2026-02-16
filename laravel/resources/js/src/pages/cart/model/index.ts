import { ICart } from '@/entities/cart/model/cart';
import { ICity } from '@/entities/city';
import { IProduct } from '@/entities/products';
import { IRecipe } from '@/entities/recipes/model';
import { IUser } from '@/entities/user';
import { TBanner } from '@/shared/banner';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ICartPageProps {
  cart: ICart;
  recipes: IRecipe[];
  special_products: IProduct[];
  cities: ICity[];
  auth: {
    user: Nullable<IUser>;
  };
  cartBanners: TBanner[];
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
}

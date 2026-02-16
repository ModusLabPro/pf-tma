import { IReview } from '@/entities/review/@x/recipe';
import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IRecipe {
  id: number;
  title: string;
  mini_description: string;
  cooking_time_minutes: number;
  difficult: number;
  number_of_persons: number;
  is_wishlist: boolean;
  image: TFile;
}

export interface IReviewedRecipe extends IReview {
  name: string;
  status: 'На модерации' | 'Активен' | 'Отклонён' | 'Удалён пользователем';
}

interface IIngredient {
  title: string;
  count: string;
}

interface IRecipeStep {
  id: number;
  title: string;
  description: string;
  order_number: Nullable<number>;
  images: string;
}

export interface IRecipeDetail {
  id: number;
  title: string;
  description: string;
  mini_description: string;
  cooking_time_minutes: number;
  content: string;
  active_cooking_time_minutes: number;
  difficult: number;
  number_of_persons: number;
  is_wishlist: boolean;
  images: TFile[];
  steps: IRecipeStep[];
  created_at: string;
  ingredients_for_dish_json: IIngredient[];
  ingredients_for_sauce_json: IIngredient[];
  rating: number;
  videos: TFile[];
}

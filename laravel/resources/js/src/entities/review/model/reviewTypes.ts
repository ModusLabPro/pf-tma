import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IReview {
  id: number;
  userName: string;
  user_logo: Nullable<string>;
  date: string;
  rating: number;
  product: string;
  text: string;
  name: string;
  answer: Nullable<string>;
  product_images: TFile;
  images: TFile[];
  likes_count: number;
  liked_by_user: boolean;
  disliked_by_user: boolean;
  created_at: string;
}

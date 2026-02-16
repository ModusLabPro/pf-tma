import { IReview } from '@/entities/review';
import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IArticle {
  id: number;
  title: string;
  mini_description: string;
  description: Nullable<string>;
  image: TFile;
  seo_description: Nullable<string>;
  seo_title: Nullable<string>;
  created_at: string;
  updated_at: string;
}

export interface IArticleCategory {
  id: number;
  title: string;
  description: string;
  article_count: number;
  image: TFile;
  order_number: number;
  is_popular: boolean;
  created_at: string;
  updated_at: string;
}

interface IAuthor {
  full_name: string;
  first_name: string;
  last_name: string;
}

interface ISelection {
  id: number;
  title: string;
}

export interface IArticleDetail {
  id: number;
  author: IAuthor;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  text: string;
  image: TFile;
  comments_count: number;
  comments: IReview[];
  tags: Array<string>;
  related: IArticle[];
  seo_description: string;
  selection: ISelection;
  next_url: Nullable<string>;
  before_url: Nullable<string>;
  seo_title: string;
}

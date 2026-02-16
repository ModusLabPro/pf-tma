import { IArticle } from '@/entities/article';
import { TFile } from '@/shared/file';

export interface IBlogSelection {
  id: number;
  title: string;
  description: string;
  article_count: number;
  order_number: number;
  image: TFile;
  updated_at: string;
  created_at: string;
  is_main: boolean;
  articles: IArticle[];
}

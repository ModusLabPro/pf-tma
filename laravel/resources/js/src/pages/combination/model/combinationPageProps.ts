import { ICombination } from '@/entities/combination';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ICombinations {
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
  data: Record<string, ICombination[]> | ICombination[];
}

export interface ICombinationPageProps {
  is_combinations_group: boolean;
  combinations: ICombinations;
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
}

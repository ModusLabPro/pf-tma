import { IReview } from '@/entities/review';
import { TFile } from '@/shared/file';

interface reward {
  name: string;
  image: TFile;
}

interface team {
  description: string;
  full_name: string;
  image: TFile;
}

export type aboutPageProps = {
  rewards: reward[];
  teams: team[];
  reviews: IReview[];
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
};

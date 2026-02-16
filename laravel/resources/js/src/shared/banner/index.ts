import { Nullable } from '@/shared/lib/utility-types/Nullable';

import { TFile } from '../file';

export type TBanner = {
  id: number;
  title: string;
  description: string;
  addition_description: string;
  link_url: string;
  button_text: string;
  image: TFile;
  promotion_days_left: Nullable<number>;
};

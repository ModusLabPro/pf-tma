import { TFile } from '@/shared/file';

export type TBanner = {
  id: number;
  title: string;
  description: string;
  addition_description: string;
  link_url: string;
  button_text: string;
  image: TFile;
};

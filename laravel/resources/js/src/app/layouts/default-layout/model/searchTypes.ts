import { TFile } from '@/shared/file';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ISearchProductHint {
  id: number;
  name: string;
  price: string;
  slug: string;
  price_type: string;
  sale_price: Nullable<number>;
  sale_percent: Nullable<number>;
  images: TFile[];
}

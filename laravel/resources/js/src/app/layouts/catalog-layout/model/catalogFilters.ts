import { Nullable } from '@/shared/lib/utility-types/Nullable';

export type ICatalogFiltersModel = {
  price_from: Nullable<number> | undefined;
  price_to: Nullable<number> | undefined;
  weight_from: Nullable<number> | undefined;
  weight_to: Nullable<number> | undefined;
  brands: string[];
  box_type: string[];
};

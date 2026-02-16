import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IAddressModel {
  city_id?: number;
  delivery_zone_id?: number;
  postal_code?: string;
  city_dadata?: string;
  region?: Nullable<string>;
  entrance?: Nullable<string>;
  floor?: string;
  apartment?: string;
  value_dadata?: string;
  dadata_json?: Record<string, string>;
  street?: string;
  house?: string;
}

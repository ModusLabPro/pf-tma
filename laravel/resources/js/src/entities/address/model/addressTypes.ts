import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IAddress {
  id: number;
  dadata_json: Nullable<string>;
  postal_code: string;
  region: Nullable<string>;
  city_id: number;
  user_id: number;
  street: string;
  house: string;
  entrance: Nullable<string>;
  floor: Nullable<string>;
  apartment: Nullable<string>;
  car_pass: boolean;
  delivery_zone_id: number;
  value_dadata: string;
  contact_method_id: Nullable<number>;
  is_primary: boolean;
  final_address: string;
}

export interface IContactMethod {
  id: number;
  name: string;
}

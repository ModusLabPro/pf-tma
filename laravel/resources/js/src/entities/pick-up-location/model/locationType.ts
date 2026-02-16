import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IPickUpLocation {
  apartment: string;
  city: string;
  entrance: string;
  floor: string;
  fullAddress: string;
  house: string;
  id: number;
  latitude: string;
  longitude: string;
  phone: string;
  postal_code: string;
  region: string;
  site: Nullable<string>;
  street: string;
  title: string;
  working_hours_from: string;
  working_hours_to: string;
}

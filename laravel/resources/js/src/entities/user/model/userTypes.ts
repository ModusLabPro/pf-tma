import { IAddress } from '@/entities/address/@x/user';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface IUser {
  id: number;
  addresses: IAddress[];
  full_name: string;
  name: string;
  birth_date: string;
  gender: Nullable<'man' | 'woman'>;
  second_name: string;
  last_name: Nullable<string>;
  phone: string;
  phone_additional: Nullable<string>;
  email: string;
  new_email: Nullable<string>;
  is_self_deleted: boolean;
  email_verified_at: Nullable<string>;
  phone_verified_at: Nullable<string>;
  admin_verify: boolean;
  is_blocked: boolean;
  created_at: string;
  updated_at: string;
  vk_id: Nullable<number>;
  yandex_id: Nullable<number>;
  is_have_password: boolean;
}

export interface IUserBonusCard {
  id: number;
  number: string;
  amount: number;
  level: string;
  cashback: number;
}

export interface IUserCity {
  city_id: number;
  city: string;
}

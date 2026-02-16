import { IProduct } from '@/entities/products';
import { IUserBonusCard } from '@/entities/user/model/userTypes';
import { TPhotoCategories } from '@/pages/main-page/model/photoCategories';
import { TBanner } from '@/shared/banner';
import { Nullable } from '@/shared/lib/utility-types/Nullable';

interface IPrivilegeLevel {
  id: number;
  name: string;
  duration_days: number;
  discount_percent: number;
  coefficient: number;
  from: number;
  to: number;
  progress: number;
  link_url: Nullable<string>;
  button_text: Nullable<string>;
}

export interface IProfilePrivilegePageProps {
  photoCategories: TPhotoCategories[];
  noveltyProducts: IProduct[];
  userBonusCard: IUserBonusCard;
  levels: IPrivilegeLevel[];
  oldestBonusCount: string;
  currentLevel: string;
  pointsToNext: number;
  expireDate: string;
  banners: TBanner[];
}

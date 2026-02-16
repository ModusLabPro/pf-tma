import { Nullable } from '@/shared/lib/utility-types/Nullable';

export type TPhotoCategories = {
  id: number;
  position: number;
  category_id: number;
  name: string;
  category_slug: string;
  description: Nullable<string>;
  text_color:  string;
  desktop_photo: string;
  mobile_photo: string;
  desktop_font_size: string;
  desktop_line_height: string;
  mobile_font_size: string;
  mobile_line_height: string;
}

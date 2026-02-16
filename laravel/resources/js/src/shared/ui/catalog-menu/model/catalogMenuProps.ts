import type { Component } from 'vue';

import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ICatalogMenuItem {
  id: number;
  icon: Component;
  title: string;
  route: string;
  slug: string;
  path: string;
  items: ICatalogMenuItem[];
}

export interface ICatalogCategory {
  id: number;
  name: string;
  slug: string;
  path: string;
  parent_category_id: Nullable<number>;
  children: ICatalogCategory[];
  icon_path: Nullable<string>;
}

export type TargetCategory = {
  id: number;
  name: string;
  slug: string;
  path: string;
  parent: Nullable<TargetCategory>;
};

export type ICatalogMenuProps = {
  categories: ICatalogCategory[];
  category_target: Nullable<TargetCategory>;
};

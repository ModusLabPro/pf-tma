import type { Component } from 'vue';

import { Nullable } from '@/shared/lib/utility-types/Nullable';

export interface ICatalogMenuItem {
  id: number;
  icon: Nullable<Component>;
  title: string;
  route: string;
  slug: string;
  path: string;
  items: ICatalogMenuItem[];
}

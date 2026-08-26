// src/data/webinarCategories.ts

import type { WebinarCategory } from '@/types/webinar';

export type WebinarCategoryItem = {
  slug: WebinarCategory;

  label: string;
};

export const webinarCategories: WebinarCategoryItem[] = [
  {
    slug: 'astrology',

    label: 'Астрологія',
  },

  {
    slug: 'tarot',

    label: 'Таро',
  },

  {
    slug: 'jungian-psychology',

    label: 'Юнгіанська психологія',
  },
];

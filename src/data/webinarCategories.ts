// src/data/webinarCategories.ts

import type { WebinarCategory } from '@/types/webinar';

export type WebinarCategoryItem = {
  slug: WebinarCategory;
  label: string;
};

export const webinarCategories: WebinarCategoryItem[] = [
  {
    slug: 'astrology',
    label: 'Астрология',
  },
  {
    slug: 'tarot',
    label: 'Таро',
  },
  {
    slug: 'jungian-psychology',
    label: 'Юнгианская психология',
  },
];

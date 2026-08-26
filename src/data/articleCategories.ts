import type { ArticleCategory } from '@/types/article';

export type ArticleCategoryItem = {
  slug: ArticleCategory;
  label: string;
  title: string;
  description: string;
};

export const articleCategories: ArticleCategoryItem[] = [
  {
    slug: 'astrology',

    label: 'Астрологія',

    title: 'Статті про астрологію',

    description:
      'Матеріали з натальної астрології, про планети, знаки зодіаку, будинки гороскопа та аспекти.',
  },

  {
    slug: 'tarot',

    label: 'Таро',

    title: 'Статті про Таро',

    description:
      'Матеріали про систему Таро, Аркани, символіку та практику розкладів.',
  },

  {
    slug: 'jungian-psychology',

    label: 'Юнгіанська психологія',

    title: 'Статті про юнгіанську психологію',

    description:
      'Матеріали про аналітичну психологію, архетипи, Тінь, Самість і процес індивідуації.',
  },
];

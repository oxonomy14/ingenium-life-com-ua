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
    label: 'Астрология',
    title: 'Статьи по астрологии',
    description:
      'Материалы по натальной астрологии, планетам, знакам, домам и аспектам.',
  },
  {
    slug: 'tarot',
    label: 'Таро',
    title: 'Статьи о Таро',
    description:
      'Материалы о системе Таро, Арканах, символике и практике раскладов.',
  },
  {
    slug: 'jungian-psychology',
    label: 'Юнгианская психология',
    title: 'Статьи по юнгианской психологии',
    description:
      'Материалы об аналитической психологии, архетипах, Тени, Самости и процессе индивидуации.',
  },
];

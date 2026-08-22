// src/data/freeLessons.ts

export type FreeLessonCategory =
  | 'astrology'
  | 'tarot'
  | 'psychology'
  | 'astromagic';

export interface FreeLesson {
  slug: string;
  title: string;
  description: string;

  category: FreeLessonCategory;
  categoryLabel: string;

  image: string;
  imageAlt: string;

  vimeoId: string;
  vimeoHash?: string;

  courseSlug?: string;
  courseTitle?: string;

  duration?: string;
  order?: number;
}

export const freeLessons: FreeLesson[] = [
  {
    slug: 'natal-astrology-2-intro',
    title: 'Натальный курс 2.0 — Живая Астрология',
    description:
      'Как работает астрология, главные мифы об астрологии, основные принципы натальной карты, уровни чтения карты и строение гороскопа.',
    category: 'astrology',
    categoryLabel: 'Астрология',
    image: '/images/free/natal-astrology-v2-main.webp',
    imageAlt: 'Бесплатный урок по натальной астрологии',
    vimeoId: '273667146',
    vimeoHash: '8e71f1ffcb',
    courseSlug: 'natal-astrology-v2',
    courseTitle: 'Натальная астрология 2.0',
    order: 1,
  },

  {
    slug: 'astrology-business-finance',
    title: 'Астрология бизнеса и финансов 3.0',
    description:
      'Мифы о деньгах в астрологии, астрологические правила анализа, инструменты финансовой астрологии и психология денежных событий.',
    category: 'astrology',
    categoryLabel: 'Астрология',
    image: '/images/free/business-finance-astrology-cover.webp',
    imageAlt: 'Бесплатный урок по астрологии бизнеса и финансов',
    vimeoId: '394491467',
    vimeoHash: '06bc624594',
    courseSlug: 'business-finance-astrology',
    courseTitle: 'Астрология бизнеса и финансов 3.0',
    order: 2,
  },

  {
    slug: 'tarot-keys-of-reality-intro',
    title: 'Таро. Ключи Реальности',
    description:
      'Как работает Таро, области применения, школы и колоды Таро, структура колоды и основные правила работы с картами.',
    category: 'tarot',
    categoryLabel: 'Таро',
    image: '/images/free/tarot-keys-of-reality-main.webp',
    imageAlt: 'Бесплатный урок по Таро',
    vimeoId: '376504516',
    vimeoHash: '341b0d4251',
    courseSlug: 'tarot-keys-of-reality',
    courseTitle: 'Таро. Ключи Реальности',
    order: 3,
  },
];

export function getFreeLessons() {
  return [...freeLessons].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

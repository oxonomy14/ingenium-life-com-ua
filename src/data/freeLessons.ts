// src/data/freeLessons.ts

export type FreeLessonCategory =
  | 'astrology'
  | 'tarot'
  | 'jungian-psychology'
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

  uploadDate?: string;

  durationIso?: string;

  courseSlug?: string;

  courseTitle?: string;

  duration?: string;

  order?: number;
}

export const freeLessons: FreeLesson[] = [
  {
    slug: 'natal-astrology-2-intro',

    title: 'Натальний курс 2.0 — Жива Астрологія',

    description:
      'Як працює астрологія, головні міфи про астрологію, основні принципи натальної карти, рівні читання карти та будова гороскопа.',

    category: 'astrology',

    categoryLabel: 'Астрологія',

    image: '/images/free/natal-astrology-v2-main.webp',

    imageAlt: 'Безкоштовний урок з натальної астрології',

    vimeoId: '273667146',

    vimeoHash: '8e71f1ffcb',

    courseSlug: 'natal-astrology-v2',

    courseTitle: 'Натальна астрологія 2.0',

    uploadDate: '2018-06-06',

    duration: '2 год 30 хв',

    durationIso: 'PT2H30M',

    order: 1,
  },

  {
    slug: 'astrology-business-finance',

    title: 'Астрологія бізнесу та фінансів 3.0',

    description:
      'Міфи про гроші в астрології, астрологічні правила аналізу, інструменти фінансової астрології та психологія грошових подій.',

    category: 'astrology',

    categoryLabel: 'Астрологія',

    image: '/images/free/business-finance-astrology-cover.webp',

    imageAlt: 'Безкоштовний урок з астрології бізнесу та фінансів',

    vimeoId: '394491467',

    vimeoHash: '06bc624594',

    courseSlug: 'business-finance-astrology',

    courseTitle: 'Астрологія бізнесу та фінансів 3.0',

    duration: '1 год 57 хв',

    uploadDate: '2020-02-29',

    durationIso: 'PT1H57M',

    order: 2,
  },

  {
    slug: 'tarot-keys-of-reality-intro',

    title: 'Таро. Ключі Реальності',

    description:
      'Як працює Таро, сфери застосування, школи та колоди Таро, структура колоди й основні правила роботи з картами.',

    category: 'tarot',

    categoryLabel: 'Таро',

    image: '/images/free/tarot-keys-of-reality-main.webp',

    imageAlt: 'Безкоштовний урок з Таро',

    vimeoId: '376504516',

    vimeoHash: '341b0d4251',

    courseSlug: 'tarot-keys-of-reality',

    courseTitle: 'Таро. Ключі Реальності',

    duration: '1 год 59 хв',

    uploadDate: '2019-11-30',

    durationIso: 'PT1H59M',

    order: 3,
  },
];

export function getFreeLessons() {
  return [...freeLessons].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

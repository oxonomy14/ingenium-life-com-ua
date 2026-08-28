// src/data/authors.ts

export const authors = {
  'pavel-dementiev': {
    id: 'pavel-dementiev',

    name: 'Павло Дементьєв',

    role: 'Автор проєкту InGenium Life',

    description:
      'Досліджує астрологію, символічні системи та юнгіанську психологію, поєднуючи теорію з практичним розумінням людини.',

    image: '/images/author/pavel-dementiev-article.webp',

    href: '/about',
  },

  'andrii-semenenko': {
    id: 'andrii-semenenko',

    name: 'Андрій Семененко',

    role: 'Адміністратор InGenium Life',

    description:
      'Випускник InGenium, пройшов повний цикл навчання натальної астрології та отримав сертифікат за результатами підсумкового іспиту.',

    image: '/images/author/andrii-semenenko-article.webp',

    href: '',
  },
} as const;

export type AuthorId = keyof typeof authors;

export function getAuthorById(id: string) {
  return authors[id as AuthorId] ?? null;
}

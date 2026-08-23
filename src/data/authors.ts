// src/data/authors.ts

export const authors = {
  'pavel-dementiev': {
    id: 'pavel-dementiev',
    name: 'Павел Дементьев',
    role: 'Автор проекта InGenium Life',
    description:
      'Исследует астрологию, символические системы и юнгианскую психологию, соединяя теорию с практическим пониманием человека.',
    image: '/images/author/pavel-dementiev-article.webp',
    href: '/about',
  },
  'andrei-semenenko': {
    id: 'andrei-semenenko',
    name: 'Андрей Семененко',
    role: 'Администратор InGenium Life',
    description:
      'Выпускник InGenium, прошёл полный цикл обучения натальной астрологии и получил сертификат по результатам итогового экзамена.',
    image: '/images/author/andrei-semenenko-article.webp',
    href: '',
  },
} as const;

export type AuthorId = keyof typeof authors;

export function getAuthorById(id: string) {
  return authors[id as AuthorId] ?? null;
}

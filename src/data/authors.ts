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
} as const;

export type AuthorId = keyof typeof authors;

export function getAuthorById(id: string) {
  return authors[id as AuthorId] ?? null;
}

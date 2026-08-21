// src/types/article.ts

export type ArticleCourseReference = {
  category: string;
  slug: string;
};

export type ArticleCategory = 'astrology' | 'tarot' | 'jungian-psychology';

export type Articles = {
  authorId?: string;
  slug: string;
  courseSlug?: string;
  course?: ArticleCourseReference;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  updatedAt?: string;
  category: ArticleCategory;
  labelCategory: string;
  image: string;
  imageAlt?: string;
};

export type Article = Articles & {
  updatedAt?: string;
  content: string;
};

// src/lib/articles.ts

import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import type { Article, ArticleCategory, Articles } from '@/types/article';

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

function getMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  return entries.flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      return [fullPath];
    }

    return [];
  });
}

export function getAllArticles(): Articles[] {
  const filePaths = getMarkdownFiles(articlesDirectory);

  const articles = filePaths.map((fullPath) => {
    const fileName = path.basename(fullPath);
    const slug = fileName.replace(/\.md$/, '');

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug,

      authorId: data.authorId,

      courseSlug: data.courseSlug,
      course: data.course,

      title: data.title,
      description: data.description,
      shortDescription: data.shortDescription,

      date: data.date,

      category: data.category as ArticleCategory,
      labelCategory: data.labelCategory,

      image: data.image,
      imageAlt: data.imageAlt,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getAllArticleSlugs(): string[] {
  return getAllArticles().map((article) => article.slug);
}

export function getArticlesByCategory(category: ArticleCategory): Articles[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getArticleBySlug(slug: string): Article | null {
  const filePaths = getMarkdownFiles(articlesDirectory);

  const articlePath = filePaths.find(
    (fullPath) => path.basename(fullPath, '.md') === slug,
  );

  if (!articlePath) {
    return null;
  }

  const fileContents = fs.readFileSync(articlePath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug,

    authorId: data.authorId,

    courseSlug: data.courseSlug,
    course: data.course,

    title: data.title,
    description: data.description,
    shortDescription: data.shortDescription,

    date: data.date,
    updatedAt: data.updatedAt,

    category: data.category as ArticleCategory,
    labelCategory: data.labelCategory,

    image: data.image,
    imageAlt: data.imageAlt,

    content,
  };
}

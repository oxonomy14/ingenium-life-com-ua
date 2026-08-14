import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { Articles, Article } from '@/types/article';
/* 
const articlesDirectory = path.join(process.cwd(), 'src/content/articles'); */

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

export function getAllArticles(): Articles[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');

      const fullPath = path.join(articlesDirectory, fileName);

      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        image: data.image,
        imageAlt: data.imageAlt,
      };
    });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updatedAt: data.updatedAt,
    category: data.category,
    image: data.image,
    imageAlt: data.imageAlt,
    content,
  };
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getArticlesByCategory(category: string): Articles[] {
  return getAllArticles().filter((article) => article.category === category);
}

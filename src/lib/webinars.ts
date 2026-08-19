import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import type { Webinar, Webinars, WebinarCategory } from '@/types/webinar';

const webinarsDirectory = path.join(process.cwd(), 'content/webinars');

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

    if (
      entry.isFile() &&
      (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))
    ) {
      return [fullPath];
    }

    return [];
  });
}

function parseWebinarFile(filePath: string): Webinar {
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug: data.slug,

    title: data.title,
    subtitle: data.subtitle,

    description: data.description,
    shortDescription: data.shortDescription || data.description,

    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,

    category: data.category as WebinarCategory,
    labelCategory: data.labelCategory,

    image: data.image,
    imageAlt: data.imageAlt,

    authorId: data.authorId,

    format: data.format,
    duration: data.duration,
    webinarYear: data.webinarYear,

    price: data.price,

    channelWebinar: data.channelWebinar ?? false,

    featured: data.featured ?? false,
    published: data.published ?? true,

    content,
  };
}

/**
 * Возвращает все опубликованные вебинары.
 */
export function getWebinars(): Webinars[] {
  const files = getMarkdownFiles(webinarsDirectory);

  return files
    .map(parseWebinarFile)
    .filter((webinar) => webinar.published)
    .map(({ content, ...webinar }) => webinar)
    .sort((a, b) => {
      const yearA = a.webinarYear ?? 0;
      const yearB = b.webinarYear ?? 0;

      return yearB - yearA;
    });
}

/**
 * Возвращает полный вебинар по slug,
 * включая Markdown-контент.
 */
export function getWebinarBySlug(slug: string): Webinar | null {
  const files = getMarkdownFiles(webinarsDirectory);

  const webinar = files
    .map(parseWebinarFile)
    .find((item) => item.slug === slug && item.published);

  return webinar ?? null;
}

/**
 * Возвращает вебинары определённой категории.
 */
export function getWebinarsByCategory(category: WebinarCategory): Webinars[] {
  return getWebinars().filter((webinar) => webinar.category === category);
}

/**
 * Возвращает избранные вебинары.
 */
export function getFeaturedWebinars(limit?: number): Webinars[] {
  const webinars = getWebinars().filter((webinar) => webinar.featured);

  if (limit) {
    return webinars.slice(0, limit);
  }

  return webinars;
}

/**
 * Slug всех опубликованных вебинаров.
 *
 * Пригодится для generateStaticParams()
 * на /webinars/[slug].
 */
export function getWebinarSlugs(): string[] {
  return getWebinars().map((webinar) => webinar.slug);
}

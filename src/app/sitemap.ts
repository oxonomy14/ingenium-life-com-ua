// src/app/sitemap.ts

import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';
import { articleCategories } from '@/data/articleCategories';
import { legalPages } from '@/data/legalPages';
import { getAllArticles } from '@/lib/articles';
import { getAllCourses } from '@/lib/courses';
import { getWebinars } from '@/lib/webinars';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const articles = getAllArticles();
  const courses = getAllCourses();
  const webinars = getWebinars();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/education`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/education/astrology`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/education/tarot`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/education/jungian-psychology`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/education/webinars`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/education/free`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/consultations`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/closed-channel`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacts`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Категории статей

  const articleCategoryPages: MetadataRoute.Sitemap = articleCategories.map(
    (category) => ({
      url: `${baseUrl}/articles/category/${category.slug}`,
      changeFrequency: 'weekly',
      priority: 0.8,
    }),
  );

  // Статьи

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Курсы

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/education/${course.categorySlug}/${course.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Вебинары

  const webinarPages: MetadataRoute.Sitemap = webinars.map((webinar) => ({
    url: `${baseUrl}/education/webinars/${webinar.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Юридические страницы

  const legalPageRoutes: MetadataRoute.Sitemap = Object.values(legalPages).map(
    (page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
  );

  return [
    ...staticPages,
    ...articleCategoryPages,
    ...articlePages,
    ...coursePages,
    ...webinarPages,
    ...legalPageRoutes,
  ];
}

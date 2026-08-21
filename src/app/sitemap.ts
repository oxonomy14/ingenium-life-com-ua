// src/app/sitemap.ts

import type { MetadataRoute } from 'next';

import { getAllArticles } from '@/lib/articles';
import { getAllCourses } from '@/lib/courses';
import { getWebinars } from '@/lib/webinars';

const BASE_URL = 'https://ingenium-life.com.ua';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const courses = getAllCourses();
  const webinars = getWebinars();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/articles`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/education`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/education/astrology`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/education/tarot`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/education/jungian-psychology`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/webinars`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/consultations`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contacts`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const articleCategoryPages: MetadataRoute.Sitemap = [
    'astrology',
    'tarot',
    'jungian-psychology',
  ].map((category) => ({
    url: `${BASE_URL}/articles/category/${category}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/education/${course.categorySlug}/${course.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const webinarPages: MetadataRoute.Sitemap = webinars.map((webinar) => ({
    url: `${BASE_URL}/webinars/${webinar.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...articleCategoryPages,
    ...articlePages,
    ...coursePages,
    ...webinarPages,
  ];
}

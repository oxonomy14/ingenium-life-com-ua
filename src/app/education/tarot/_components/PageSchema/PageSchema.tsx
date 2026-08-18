// src/app/education/tarot/_components/PageSchema/PageSchema.tsx

import { siteConfig } from '@/config/site';

import type { Course } from '@/lib/courses';

type PageSchemaProps = {
  courses: Course[];
};

export default function PageSchema({ courses }: PageSchemaProps) {
  const pageUrl = `${siteConfig.url}/education/tarot`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',

    '@id': `${pageUrl}#webpage`,

    url: pageUrl,

    name: 'Курсы Таро онлайн — InGenium',

    description:
      'Курсы Таро InGenium для начинающих и продолжающих: структура колоды, Старшие и Младшие Арканы, символика, интерпретация и практика чтения раскладов.',

    inLanguage: siteConfig.language,

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },

    about: {
      '@type': 'Thing',
      name: 'Таро',
    },

    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },

    mainEntity: {
      '@type': 'ItemList',

      name: 'Курсы Таро',

      numberOfItems: courses.length,

      itemListElement: courses.map((course, index) => ({
        '@type': 'ListItem',

        position: index + 1,

        item: {
          '@type': 'Course',

          '@id': `${pageUrl}/${course.slug}#course`,

          url: `${pageUrl}/${course.slug}`,

          name: course.title,

          description: course.shortDescription || course.description,

          ...(course.image && {
            image: `${siteConfig.url}${course.image}`,
          }),

          provider: {
            '@type': 'Organization',
            '@id': `${siteConfig.url}/#organization`,
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  );
}

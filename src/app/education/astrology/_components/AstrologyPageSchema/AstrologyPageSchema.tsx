import { siteConfig } from '@/config/site';

import type { Course } from '@/lib/courses';

type AstrologyPageSchemaProps = {
  courses: Course[];
};

export default function AstrologyPageSchema({
  courses,
}: AstrologyPageSchemaProps) {
  const pageUrl = `${siteConfig.url}/education/astrology`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',

    '@id': `${pageUrl}#webpage`,

    url: pageUrl,

    name: 'Курсы по астрологии онлайн — InGenium',

    description:
      'Курсы по астрологии InGenium для начинающих и продолжающих: натальная астрология, анализ карты, прогностика и практическая работа.',

    inLanguage: siteConfig.language,

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },

    about: {
      '@type': 'Thing',
      name: 'Астрология',
    },

    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },

    mainEntity: {
      '@type': 'ItemList',

      name: 'Курсы по астрологии',

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

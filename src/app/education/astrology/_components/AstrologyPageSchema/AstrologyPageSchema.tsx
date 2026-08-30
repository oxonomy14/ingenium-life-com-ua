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

    name: 'Курси астрології онлайн — InGenium',

    description:
      'Курси астрології InGenium для початківців і тих, хто продовжує навчання: натальна астрологія, аналіз карти, прогностика та практична робота.',

    inLanguage: siteConfig.language,

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },

    about: {
      '@type': 'Thing',
      name: 'Астрологія',
    },

    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },

    mainEntity: {
      '@type': 'ItemList',

      name: 'Курси астрології',

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

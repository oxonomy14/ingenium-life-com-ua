// src/app/education/jungian-psychology/_components/PageSchema/PageSchema.tsx

import { siteConfig } from '@/config/site';

import type { Course } from '@/lib/courses';

type PageSchemaProps = {
  courses: Course[];
};

export default function PageSchema({ courses }: PageSchemaProps) {
  const pageUrl = `${siteConfig.url}/education/jungian-psychology`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',

    '@id': `${pageUrl}#webpage`,

    url: pageUrl,
    name: 'Обучение юнгианской психологии',

    description:
      'Курсы и программы по юнгианской психологии: архетипы, Тень, психологические типы, функции сознания, символы, сновидения и бессознательные процессы.',

    inLanguage: siteConfig.language,

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },

    about: {
      '@type': 'Thing',
      name: 'Юнгианская психология',
      alternateName: 'Аналитическая психология',
    },

    mainEntity: {
      '@type': 'ItemList',

      itemListElement: courses.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,

        item: {
          '@type': 'Course',

          name: course.title,
          description: course.shortDescription || course.description,

          url: `${pageUrl}/${course.slug}`,

          provider: {
            '@type': 'Organization',
            '@id': `${siteConfig.url}/#organization`,
            name: siteConfig.name,
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

// src/components/Seo/FreeLessonsSchema/FreeLessonsSchema.tsx

import { getFreeLessons } from '@/data/freeLessons';

const BASE_URL = 'https://ingenium-life.com.ua';

export default function FreeLessonsSchema() {
  const lessons = getFreeLessons();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/education/free#collectionpage`,
    url: `${BASE_URL}/education/free`,
    name: 'Бесплатные уроки по астрологии, Таро и психологии',
    description:
      'Бесплатные видеоуроки InGenium по астрологии, Таро, астропсихологии и работе с натальной картой.',
    inLanguage: 'ru',

    mainEntity: {
      '@type': 'ItemList',
      '@id': `${BASE_URL}/education/free#itemlist`,
      name: 'Бесплатные уроки InGenium',
      numberOfItems: lessons.length,

      itemListElement: lessons.map((lesson, index) => ({
        '@type': 'ListItem',
        position: index + 1,

        item: {
          '@type': 'VideoObject',

          '@id': `${BASE_URL}/education/free#${lesson.slug}`,

          name: lesson.title,
          description: lesson.description,

          thumbnailUrl: `${BASE_URL}${lesson.image}`,

          ...(lesson.uploadDate && {
            uploadDate: lesson.uploadDate,
          }),

          ...(lesson.durationIso && {
            duration: lesson.durationIso,
          }),

          embedUrl: lesson.vimeoHash
            ? `https://player.vimeo.com/video/${lesson.vimeoId}?h=${lesson.vimeoHash}`
            : `https://player.vimeo.com/video/${lesson.vimeoId}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

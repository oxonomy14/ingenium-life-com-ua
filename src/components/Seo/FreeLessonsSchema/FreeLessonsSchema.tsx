// src/components/Seo/FreeLessonsSchema/FreeLessonsSchema.tsx

import { getAllCourses } from '@/lib/courses';

const BASE_URL = 'https://ingenium-life.com.ua';

export default function FreeLessonsSchema() {
  const courses = getAllCourses().filter(
    (course) =>
      course.published &&
      course.previewLesson?.enabled &&
      course.previewLesson?.vimeoId,
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/education/free#collectionpage`,
    url: `${BASE_URL}/education/free`,
    name: 'Відкриті уроки для ознайомлення з астрології, Таро та психології',
    description:
      'Відкриті відеоуроки InGenium для ознайомлення з астрологією, Таро, астропсихологією та роботою з натальною картою.',
    inLanguage: 'uk',

    mainEntity: {
      '@type': 'ItemList',
      '@id': `${BASE_URL}/education/free#itemlist`,
      name: 'Відкриті уроки для ознайомлення',
      numberOfItems: courses.length,

      itemListElement: courses.map((course, index) => {
        const lesson = course.previewLesson!;

        return {
          '@type': 'ListItem',
          position: index + 1,

          item: {
            '@type': 'VideoObject',

            '@id': `${BASE_URL}/education/free#${course.slug}`,

            name: lesson.videoTitle || course.title,

            description:
              lesson.description ||
              course.shortDescription ||
              course.description,

            thumbnailUrl: course.image
              ? `${BASE_URL}${course.image}`
              : undefined,

            ...(lesson.uploadDate && {
              uploadDate: lesson.uploadDate,
            }),

            ...(lesson.durationIso && {
              duration: lesson.durationIso,
            }),

            embedUrl: lesson.vimeoHash
              ? `https://player.vimeo.com/video/${lesson.vimeoId}?h=${lesson.vimeoHash}`
              : `https://player.vimeo.com/video/${lesson.vimeoId}`,

            url: `${BASE_URL}/education/${course.categorySlug}/${course.slug}`,
          },
        };
      }),
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

import { siteConfig } from '@/config/site';

import type { Course } from '@/lib/courses';

type CourseSchemaProps = {
  course: Course;
  categorySlug: string;
};

export default function CourseSchema({
  course,
  categorySlug,
}: CourseSchemaProps) {
  const courseUrl = `${siteConfig.url}/education/${categorySlug}/${course.slug}`;

  const courseLanguage = course.language === 'Російська' ? 'ru' : 'uk';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',

    '@id': `${courseUrl}#course`,

    url: courseUrl,

    name: course.title,

    description: course.seoDescription || course.description,

    ...(course.image && {
      image: `${siteConfig.url}${course.image}`,
    }),

    inLanguage: courseLanguage,

    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },

    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/about#person`,
      name: 'Павло Дементьєв',
      url: `${siteConfig.url}/about`,
    },

    ...(course.level && {
      educationalLevel: course.level,
    }),

    ...(course.program?.length && {
      syllabusSections: course.program.map((module) => ({
        '@type': 'Syllabus',
        name: module.title,

        ...(module.description && {
          description: module.description,
        }),
      })),
    }),
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

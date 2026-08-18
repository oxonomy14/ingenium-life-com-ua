import { siteConfig } from '@/config/site';

import type { Course } from '@/lib/courses';

type CourseBreadcrumbSchemaProps = {
  course: Course;

  categorySlug: string;
  categoryName: string;
};

export default function CourseBreadcrumbSchema({
  course,
  categorySlug,
  categoryName,
}: CourseBreadcrumbSchemaProps) {
  const courseUrl = `${siteConfig.url}/education/${categorySlug}/${course.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    '@id': `${courseUrl}#breadcrumb`,

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: siteConfig.url,
      },

      {
        '@type': 'ListItem',
        position: 2,
        name: 'Обучение',
        item: `${siteConfig.url}/education`,
      },

      {
        '@type': 'ListItem',
        position: 3,
        name: categoryName,
        item: `${siteConfig.url}/education/${categorySlug}`,
      },

      {
        '@type': 'ListItem',
        position: 4,
        name: course.title,
        item: courseUrl,
      },
    ],
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

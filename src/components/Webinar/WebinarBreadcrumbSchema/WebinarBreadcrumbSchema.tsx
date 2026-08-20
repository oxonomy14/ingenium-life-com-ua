// src/components/Webinar/WebinarBreadcrumbSchema/WebinarBreadcrumbSchema.tsx

import type { Webinar } from '@/types/webinar';

import { siteConfig } from '@/config/site';

type WebinarBreadcrumbSchemaProps = {
  webinar: Webinar;
};

export default function WebinarBreadcrumbSchema({
  webinar,
}: WebinarBreadcrumbSchemaProps) {
  const webinarUrl = `${siteConfig.url}/education/webinars/${webinar.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

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
        name: 'Вебинары',
        item: `${siteConfig.url}/webinars`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: webinar.title,
        item: webinarUrl,
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

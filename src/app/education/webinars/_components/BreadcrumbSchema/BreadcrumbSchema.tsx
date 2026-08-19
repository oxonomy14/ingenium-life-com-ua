// src/app/education/jungian-psychology/_components/BreadcrumbSchema/BreadcrumbSchema.tsx

import { siteConfig } from '@/config/site';

export default function BreadcrumbSchema() {
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
        name: 'Обучение',
        item: `${siteConfig.url}/education`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Юнгианская психология',
        item: `${siteConfig.url}/education/jungian-psychology`,
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

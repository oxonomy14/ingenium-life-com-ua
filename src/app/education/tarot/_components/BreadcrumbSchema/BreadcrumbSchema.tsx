import { siteConfig } from '@/config/site';

export default function AstrologyBreadcrumbSchema() {
  const pageUrl = `${siteConfig.url}/education/tarot`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    '@id': `${pageUrl}#breadcrumb`,

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
        name: 'Таро',
        item: pageUrl,
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

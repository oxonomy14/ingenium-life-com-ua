import { siteConfig } from '@/config/site';

export default function WebSiteSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',

    '@id': `${siteConfig.url}/#website`,

    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,

    inLanguage: siteConfig.language,

    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
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

import { siteConfig } from '@/config/site';

export default function PersonSchema() {
  const founder = siteConfig.organization.founder;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',

    '@id': `${siteConfig.url}/#${founder.id}`,

    name: founder.name,

    url: `${siteConfig.url}/about`,

    image: `${siteConfig.url}${founder.image}`,
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

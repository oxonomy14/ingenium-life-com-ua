import { siteConfig } from '@/config/site';

export default function AboutPageSchema() {
  const aboutPageUrl = `${siteConfig.url}/about`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',

    '@id': `${aboutPageUrl}#aboutpage`,

    url: aboutPageUrl,
    name: `О проекте ${siteConfig.name}`,

    description:
      'InGenium Life — авторский образовательный проект об астрологии, Таро, психологии и системах понимания человека.',

    inLanguage: siteConfig.language,

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },

    about: [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#${siteConfig.organization.founder.id}`,
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

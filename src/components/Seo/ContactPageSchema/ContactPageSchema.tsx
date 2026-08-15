import { siteConfig } from '@/config/site';

export default function ContactPageSchema() {
  const contactPageUrl = `${siteConfig.url}/contacts`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',

    '@id': `${contactPageUrl}#contactpage`,

    url: contactPageUrl,

    name: `Контакты ${siteConfig.name}`,

    description:
      'Контакты InGenium Life для вопросов об обучении, консультациях, вебинарах и проектах.',

    inLanguage: siteConfig.language,

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
    },

    about: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.organization.name,
      url: siteConfig.url,
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

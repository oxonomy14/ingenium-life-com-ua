import { siteConfig } from '@/config/site';

export default function OrganizationSchema() {
  const socialLinks = Object.values(siteConfig.social).filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,

    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,

    url: siteConfig.url,

    logo: `${siteConfig.url}${siteConfig.organization.logo}`,

    description: siteConfig.description,

    founder: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#${siteConfig.organization.founder.id}`,
    },

    ...(siteConfig.contacts.email && {
      email: siteConfig.contacts.email,
    }),

    ...(socialLinks.length > 0 && {
      sameAs: socialLinks,
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

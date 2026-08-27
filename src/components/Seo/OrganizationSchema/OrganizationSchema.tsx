import { siteConfig } from '@/config/site';

export default function OrganizationSchema() {
  const socialLinks = Object.values(siteConfig.social).filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteConfig.url}/#organization`,

    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,

    url: siteConfig.url,

    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}${siteConfig.organization.logo}`,
    },

    description: siteConfig.description,

    founder: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#${siteConfig.organization.founder.id}`,
      name: 'Павло Дементьєв',
      jobTitle: 'Автор InGenium Life',
    },

    employee: [
      {
        '@type': 'Person',
        name: 'Катерина Ярська',
        jobTitle: 'Авторка курсів InGenium Life, викладачка',
      },
      {
        '@type': 'Person',
        name: 'Світлана Щербакова',
        jobTitle: 'Адміністраторка InGenium Life',
      },
      {
        '@type': 'Person',
        name: 'Андрій Семененко',
        jobTitle: 'Адміністратор InGenium Life',
      },
    ],

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

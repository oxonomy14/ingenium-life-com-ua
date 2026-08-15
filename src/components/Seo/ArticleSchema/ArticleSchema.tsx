import { siteConfig } from '@/config/site';

type ArticleSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  category?: string;
};

export default function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
  category,
}: ArticleSchemaProps) {
  const articleUrl = `${siteConfig.url}/articles/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: title,
    description,

    datePublished,

    ...(dateModified && {
      dateModified,
    }),

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },

    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#${siteConfig.organization.founder.id}`,
    },

    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },

    ...(image && {
      image: `${siteConfig.url}${image}`,
    }),

    ...(category && {
      articleSection: category,
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

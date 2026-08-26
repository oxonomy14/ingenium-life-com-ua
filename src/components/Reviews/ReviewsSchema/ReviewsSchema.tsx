import { reviews } from '@/data/reviews';
import { siteConfig } from '@/config/site';

export default function ReviewsSchema() {
  const pageUrl = `${siteConfig.url}/reviews`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',

    '@id': `${pageUrl}#webpage`,
    url: pageUrl,

    name: 'Отзывы об обучении в InGenium',

    description:
      'Отзывы учеников и выпускников InGenium об обучении астрологии, курсах, вебинарах и авторских образовательных программах.',

    inLanguage: 'ru',

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
    },

    about: {
      '@type': 'EducationalOrganization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },

    mainEntity: {
      '@type': 'ItemList',

      itemListElement: reviews.map((review, index) => ({
        '@type': 'ListItem',
        position: index + 1,

        item: {
          '@type': 'Review',

          '@id': `${pageUrl}#review-${review.id}`,

          author: {
            '@type': 'Person',
            name: review.name,
          },

          reviewBody: review.text,

          itemReviewed: {
            '@type': 'Course',
            name: review.course,

            provider: {
              '@type': 'EducationalOrganization',
              '@id': `${siteConfig.url}/#organization`,
              name: siteConfig.name,
              url: siteConfig.url,
            },
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

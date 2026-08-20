// src/app/webinars/_components/PageSchema/PageSchema.tsx

import { siteConfig } from '@/config/site';

import { convertRubToUah } from '@/lib/currency';

import type { Webinars } from '@/types/webinar';

type PageSchemaProps = {
  webinars: Webinars[];
};

export default function PageSchema({ webinars }: PageSchemaProps) {
  const pageUrl = `${siteConfig.url}/education/webinars`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',

    '@id': `${pageUrl}#webpage`,

    url: pageUrl,

    name: 'Вебинары InGenium',

    description:
      'Авторские вебинары Павла Дементьева по астрологии, Таро и юнгианской психологии. Записи вебинаров доступны для отдельного приобретения.',

    inLanguage: siteConfig.language,

    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },

    about: {
      '@type': 'Thing',
      name: 'Вебинары InGenium',
    },

    mainEntity: {
      '@type': 'ItemList',

      numberOfItems: webinars.length,

      itemListElement: webinars.map((webinar, index) => {
        const webinarUrl = `${pageUrl}/${webinar.slug}`;

        const priceUah = webinar.price
          ? Math.round(
              webinar.price.currency === 'RUB'
                ? convertRubToUah(webinar.price.amount)
                : webinar.price.amount,
            )
          : undefined;

        const imageUrl = webinar.image
          ? webinar.image.startsWith('http')
            ? webinar.image
            : `${siteConfig.url}${webinar.image}`
          : undefined;

        return {
          '@type': 'ListItem',

          position: index + 1,

          item: {
            '@type': 'Product',

            '@id': `${webinarUrl}#product`,

            name: webinar.title,

            description: webinar.shortDescription || webinar.description,

            url: webinarUrl,

            ...(imageUrl && {
              image: imageUrl,
            }),

            category: webinar.labelCategory,

            brand: {
              '@type': 'Organization',
              '@id': `${siteConfig.url}/#organization`,
              name: siteConfig.name,
            },

            ...(priceUah !== undefined && {
              offers: {
                '@type': 'Offer',

                url: webinarUrl,

                price: priceUah,
                priceCurrency: 'UAH',

                availability: 'https://schema.org/InStock',
              },
            }),
          },
        };
      }),
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

// src/components/Webinar/WebinarSchema/WebinarSchema.tsx

import type { Webinar } from '@/types/webinar';

import { siteConfig } from '@/config/site';
import { convertRubToUah } from '@/lib/currency';

type WebinarSchemaProps = {
  webinar: Webinar;
};

export default function WebinarSchema({ webinar }: WebinarSchemaProps) {
  const webinarUrl = `${siteConfig.url}/education/webinars/${webinar.slug}`;

  const imageUrl = webinar.image
    ? webinar.image.startsWith('http')
      ? webinar.image
      : `${siteConfig.url}${webinar.image}`
    : undefined;

  const priceUah = webinar.price
    ? Math.round(
        webinar.price.currency === 'RUB'
          ? convertRubToUah(webinar.price.amount)
          : webinar.price.amount,
      )
    : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',

    '@id': `${webinarUrl}#webinar`,

    name: webinar.title,

    description:
      webinar.seoDescription || webinar.description || webinar.shortDescription,

    url: webinarUrl,

    ...(imageUrl && {
      thumbnailUrl: [imageUrl],
    }),

    ...(webinar.webinarYear && {
      uploadDate: `${webinar.webinarYear}-01-01`,
    }),

    inLanguage: siteConfig.language,

    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#pavel-dementiev`,
      name: 'Павел Дементьев',
    },

    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },

    isFamilyFriendly: true,

    ...(priceUah !== undefined && {
      offers: {
        '@type': 'Offer',
        url: webinarUrl,
        price: priceUah,
        priceCurrency: 'UAH',
        availability: 'https://schema.org/InStock',
      },
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

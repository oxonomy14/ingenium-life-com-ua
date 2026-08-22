// src/components/Schemas/ConsultationsPageSchema.tsx

import { convertRubToUah } from '@/lib/currency';
import { siteConfig } from '@/config/site';
import { consultations } from '@/data/consultations';

export default function ConsultationsPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Консультации астролога онлайн',
    description:
      'Индивидуальные консультации по натальной карте: полный разбор, тематические и короткие консультации, учебные сессии и ректификация времени рождения.',
    url: `${siteConfig.url}/consultations`,
    inLanguage: 'ru',

    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },

    mainEntity: {
      '@type': 'Service',
      name: 'Астрологические консультации InGenium',
      serviceType: 'Астрологическая консультация',

      provider: {
        '@type': 'Person',
        name: siteConfig.organization.founder.name,
        url: `${siteConfig.url}/about`,
      },

      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${siteConfig.url}/contacts`,
        availableLanguage: ['ru', 'uk'],
      },

      offers: consultations.map((consultation) => ({
        '@type': 'Offer',
        name: consultation.title,
        description: consultation.description,
        price: convertRubToUah(consultation.priceRub),
        priceCurrency: 'UAH',
        availability: 'https://schema.org/InStock',
        url: `${siteConfig.url}/consultations`,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}

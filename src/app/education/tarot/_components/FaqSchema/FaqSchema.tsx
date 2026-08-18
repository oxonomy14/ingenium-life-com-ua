// src/app/education/tarot/_components/FaqSchema/FaqSchema.tsx

import { siteConfig } from '@/config/site';

import { tarotFaqItems } from '../../_data/faq';

export default function FaqSchema() {
  const pageUrl = `${siteConfig.url}/education/tarot`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    '@id': `${pageUrl}#faq`,

    url: pageUrl,

    mainEntity: tarotFaqItems.map((item) => ({
      '@type': 'Question',

      name: item.question,

      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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

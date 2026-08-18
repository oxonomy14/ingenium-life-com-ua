import { siteConfig } from '@/config/site';

import { astrologyFaqItems } from '../../_data/astrologyFaq';

export default function AstrologyFaqSchema() {
  const pageUrl = `${siteConfig.url}/education/astrology`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    '@id': `${pageUrl}#faq`,

    url: pageUrl,

    mainEntity: astrologyFaqItems.map((item) => ({
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

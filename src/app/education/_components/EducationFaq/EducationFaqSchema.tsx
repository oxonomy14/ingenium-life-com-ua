import { educationFaqItems } from './educationFaqData';

export default function EducationFaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    mainEntity: educationFaqItems.map((item) => ({
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

// src/app/reviews/page.tsx

import type { Metadata } from 'next';

import PageInDevelopment from '@/components/PageInDevelopment/PageInDevelopment';

export const metadata: Metadata = {
  title: 'Отзывы',
  description:
    'Отзывы учеников и участников образовательных программ InGenium Life.',
};

export default function ReviewsPage() {
  return (
    <PageInDevelopment
      eyebrow="Отзывы"
      title="Отзывы об InGenium Life"
      description="Мы собираем и оформляем отзывы учеников и участников наших образовательных программ. Скоро они появятся на этой странице."
    />
  );
}

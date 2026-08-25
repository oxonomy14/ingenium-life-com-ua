// src/app/reviews/page.tsx

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';

import ReviewsHero from '@/components/Reviews/ReviewsHero/ReviewsHero';
import ReviewsList from '@/components/Reviews/ReviewsList/ReviewsList';
import ReviewsCta from '@/components/Reviews/ReviewsCta/ReviewsCta';

export const metadata: Metadata = {
  title: 'Отзывы об обучении и курсах InGenium',
  description:
    'Отзывы учеников и выпускников InGenium об обучении астрологии, курсах, вебинарах и авторских образовательных программах.',
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Отзывы об обучении в InGenium',
    description:
      'Отзывы учеников и выпускников об обучении, курсах и образовательных программах InGenium.',
    url: '/reviews',
    type: 'website',
  },
};

export default function ReviewsPage() {
  return (
    <LayoutShell>
      <ReviewsHero />

      <ReviewsList />

      <ReviewsCta />
    </LayoutShell>
  );
}

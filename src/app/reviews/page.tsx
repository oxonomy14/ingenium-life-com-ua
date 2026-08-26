// src/app/reviews/page.tsx

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';

import ReviewsHero from '@/components/Reviews/ReviewsHero/ReviewsHero';
import ReviewsList from '@/components/Reviews/ReviewsList/ReviewsList';
import ReviewForm from '@/components/Reviews/ReviewForm/ReviewForm';
import ReviewsCta from '@/components/Reviews/ReviewsCta/ReviewsCta';
import ReviewsSchema from '@/components/Reviews/ReviewsSchema/ReviewsSchema';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';

import { getAllCourses } from '@/lib/courses';
import { getWebinars } from '@/lib/webinars';
import { consultations } from '@/data/consultations';

import type { ReviewProgramOption } from '@/components/Reviews/ReviewForm/ReviewForm';

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
  const courses = getAllCourses();
  const webinars = getWebinars();

  const reviewTargets: ReviewProgramOption[] = [
    ...courses.map((course) => ({
      value: `course:${course.slug}`,
      label: course.title,
      type: 'course' as const,
    })),

    ...webinars.map((webinar) => ({
      value: `webinar:${webinar.slug}`,
      label: webinar.title,
      type: 'webinar' as const,
    })),

    ...consultations.map((item) => ({
      value: `${item.reviewType}:${item.slug}`,
      label: item.title,
      type: item.reviewType,
    })),
  ];

  return (
    <LayoutShell>
      <ReviewsSchema />

      <BreadcrumbSchema
        items={[
          {
            name: 'Главная',
            url: '/',
          },
          {
            name: 'Отзывы',
            url: '/reviews',
          },
        ]}
      />
      <ReviewsHero />

      <ReviewsList />
      <ReviewForm targets={reviewTargets} />
      <ReviewsCta />
    </LayoutShell>
  );
}

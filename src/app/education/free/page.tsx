import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';
import FreeHero from '@/components/Free/FreeHero/FreeHero';
import FreeLessons from '@/components/Free/FreeLesson/FreeLessons';
import FreeCoursesCta from '@/components/Free/FreeCoursesCta/FreeCoursesCta';
import FaqSchema from '@/components/Seo/FaqSchema/FaqSchema';
import { freeFaq } from '@/data/freeFaq';
import FreeFaq from '@/components/Free/FreeFaq/FreeFaq';
import FreeLessonsSchema from '@/components/Seo/FreeLessonsSchema/FreeLessonsSchema';

export const metadata: Metadata = {
  title: 'Бесплатные уроки по астрологии, Таро и психологии',
  description:
    'Бесплатные видеоуроки InGenium по астрологии, Таро, астропсихологии и работе с натальной картой. Открытые занятия из авторских образовательных программ.',
  alternates: {
    canonical: '/education/free',
  },
  openGraph: {
    title: 'Бесплатные уроки InGenium',
    description:
      'Открытые занятия по астрологии, Таро и психологии из образовательных программ InGenium.',
    url: '/education/free',
    type: 'website',
  },
};

export default function FreeEducationPage() {
  return (
    <>
      <LayoutShell>
        <BreadcrumbSchema
          items={[
            {
              name: 'Главная',
              url: '/',
            },
            {
              name: 'Обучение',
              url: '/education',
            },
            {
              name: 'Бесплатные уроки',
              url: '/education/free',
            },
          ]}
        />
        <FaqSchema items={freeFaq} />
        <FreeLessonsSchema />
        <FreeHero />

        <FreeLessons />
        <FreeCoursesCta />
        <FreeFaq />
      </LayoutShell>
    </>
  );
}

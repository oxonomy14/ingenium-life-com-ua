// src/app/education/page.tsx

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import EducationHero from '@/app/education/_components/EducationHero/EducationHero';
import EducationPrograms from '@/app/education/_components/EducationPrograms/EducationPrograms';
import EducationFormats from '@/app/education/_components/EducationFormats/EducationFormats';
import EducationForWhom from '@/app/education/_components/EducationForWhom/EducationForWhom';
import EducationAuthor from '@/app/education/_components/EducationAuthor/EducationAuthor';
import EducationFaq from '@/app/education/_components/EducationFaq/EducationFaq';
import EducationCta from '@/app/education/_components/EducationCta/EducationCta';
import EducationFaqSchema from '@/app/education/_components/EducationFaq/EducationFaqSchema';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Обучение астрологии, Таро и психологии онлайн | InGenium',
  description:
    'Онлайн-курсы InGenium по астрологии, Таро и юнгианской психологии. Системное обучение, авторские программы, практика и отдельные вебинары.',

  alternates: {
    canonical: '/education',
  },

  openGraph: {
    title: 'Обучение в InGenium',
    description:
      'Курсы по астрологии, Таро и юнгианской психологии. Системное обучение и авторские программы.',
    url: '/education',
  },
};

export default function EducationPage() {
  return (
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
        ]}
      />
      <EducationFaqSchema />
      <EducationHero />
      <EducationPrograms />
      <EducationFormats />
      <EducationForWhom />
      <EducationAuthor />
      <EducationFaq />
      <EducationCta />
    </LayoutShell>
  );
}

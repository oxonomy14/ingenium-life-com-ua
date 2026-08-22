import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import ConsultationCatalog from '@/components/Consultations/ConsultationCatalog/ConsultationCatalog';
import ConsultationsHero from '@/components/Consultations/ConsultationsHero/ConsultationsHero';
import ConsultationTopics from '@/components/Consultations/ConsultationTopics/ConsultationTopics';
import ConsultationProcess from '@/components/Consultations/ConsultationProcess/ConsultationProcess';
import ConsultationBenefits from '@/components/Consultations/ConsultationBenefits/ConsultationBenefits';
import ConsultationAuthor from '@/components/Consultations/ConsultationAuthor/ConsultationAuthor';
import ConsultationFaq from '@/components/Consultations/ConsultationFaq/ConsultationFaq';
import ConsultationCta from '@/components/Consultations/ConsultationCta/ConsultationCta';
import FaqSchema from '@/components/Seo/FaqSchema/FaqSchema';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';
import ConsultationsPageSchema from '@/components/Seo/ConsultationsPageSchema/ConsultationsPageSchema';

import { consultationFaqItems } from '@/data/consultations';

export const metadata: Metadata = {
  title: 'Консультация астролога онлайн — Павел Дементьев | InGenium',
  description:
    'Индивидуальные консультации по натальной карте: полный разбор, тематические и короткие консультации, учебные сессии и ректификация времени рождения.',
  alternates: {
    canonical: '/consultations',
  },
  openGraph: {
    title: 'Консультации астролога онлайн | InGenium',
    description:
      'Полный разбор натальной карты, тематические консультации, короткие встречи, учебные сессии и ректификация времени рождения.',
    url: '/consultations',
    type: 'website',
  },
};

export default function ConsultationsPage() {
  return (
    <>
      <LayoutShell>
        <ConsultationsPageSchema />

        <BreadcrumbSchema
          items={[
            {
              name: 'Главная',
              url: '/',
            },
            {
              name: 'Консультации',
              url: '/consultations',
            },
          ]}
        />
        <FaqSchema items={consultationFaqItems} />
        <ConsultationsHero />
        <ConsultationCatalog />
        <ConsultationTopics />
        <ConsultationProcess />
        <ConsultationBenefits />
        <ConsultationAuthor />
        <ConsultationFaq />
        <ConsultationCta />
      </LayoutShell>
    </>
  );
}

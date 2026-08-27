// src/about/page.tsx

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import AboutHero from '@/app/about/_components/AboutHero/AboutHero';
import AboutIdea from '@/app/about/_components/AboutIdea/AboutIdea';
import AboutAuthor from '@/app/about/_components/AboutAuthor/AboutAuthor';
import AboutHistory from '@/app/about/_components/AboutHistory/AboutHistory';
import AboutKyivHistory from '@/app/about/_components/AboutKyivHistory/AboutKyivHistory';
import AboutDirections from '@/app/about/_components/AboutDirections/AboutDirections';
import AboutApproach from '@/app/about/_components/AboutApproach/AboutApproach';
import AboutToday from '@/app/about/_components/AboutToday/AboutToday';
import AboutCTA from '@/app/about/_components/AboutCTA/AboutCTA';
import AboutPageSchema from '@/components/Seo/AboutPageSchema/AboutPageSchema';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Про проєкт InGenium Life',
  description:
    'InGenium Life — авторський освітній проєкт про астрологію, Таро, психологію та системи розуміння людини. Дізнайтеся більше про ідею, підхід і філософію проєкту.',

  alternates: {
    canonical: '/about',
  },

  openGraph: {
    title: 'Про проєкт InGenium Life',
    description:
      'Авторський освітній проєкт про астрологію, Таро, психологію та системи розуміння людини.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <LayoutShell>
      <AboutPageSchema />

      <BreadcrumbSchema
        items={[
          {
            name: 'Головна',
            url: '/',
          },
          {
            name: 'Про проєкт',
            url: '/about',
          },
        ]}
      />

      <AboutHero />
      <AboutIdea />
      <AboutAuthor />
      <AboutHistory />
      <AboutKyivHistory />
      <AboutDirections />
      <AboutApproach />
      <AboutToday />
      <AboutCTA />
    </LayoutShell>
  );
}

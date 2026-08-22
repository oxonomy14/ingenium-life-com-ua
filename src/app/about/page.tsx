// src/about/page.tsx

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import AboutHero from '@/app/about/_components/AboutHero/AboutHero';
import AboutIdea from '@/app/about/_components/AboutIdea/AboutIdea';
import AboutAuthor from '@/app/about/_components/AboutAuthor/AboutAuthor';
import AboutHistory from '@/app/about/_components/AboutHistory/AboutHistory';
import AboutDirections from '@/app/about/_components/AboutDirections/AboutDirections';
import AboutApproach from '@/app/about/_components/AboutApproach/AboutApproach';
import AboutToday from '@/app/about/_components/AboutToday/AboutToday';
import AboutCTA from '@/app/about/_components/AboutCTA/AboutCTA';
import AboutPageSchema from '@/components/Seo/AboutPageSchema/AboutPageSchema';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'О проекте InGenium Life',
  description:
    'InGenium Life — авторский образовательный проект об астрологии, Таро, психологии и системах понимания человека. Узнайте больше об идее, подходе и философии проекта.',

  alternates: {
    canonical: '/about',
  },

  openGraph: {
    title: 'О проекте InGenium Life',
    description:
      'Авторский образовательный проект об астрологии, Таро, психологии и системах понимания человека.',
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
            name: 'Главная',
            url: '/',
          },
          {
            name: 'О проекте',
            url: '/about',
          },
        ]}
      />
      <AboutHero />
      <AboutIdea />
      <AboutAuthor />
      <AboutHistory />
      <AboutDirections />
      <AboutApproach />
      <AboutToday />
      <AboutCTA />
    </LayoutShell>
  );
}

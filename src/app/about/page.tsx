// src/about/page.tsx

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import AboutHero from '@/components/AboutHero/AboutHero';
import AboutIdea from '@/components/AboutIdea/AboutIdea';
import AboutAuthor from '@/components/AboutAuthor/AboutAuthor';
import AboutHistory from '@/components/AboutHistory/AboutHistory';
import AboutDirections from '@/components/AboutDirections/AboutDirections';
import AboutApproach from '@/components/AboutApproach/AboutApproach';
import AboutToday from '@/components/AboutToday/AboutToday';
import AboutCTA from '@/components/AboutCTA/AboutCTA';

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

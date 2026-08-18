// src/app/education/tarot/page.tsx
import type { Metadata } from 'next';
import { getCoursesByCategory } from '@/lib/courses';
import { getArticlesByCategory } from '@/lib/articles';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import Hero from './_components/Hero/Hero';
import Intro from './_components/Intro/Intro';
import Courses from './_components/Courses/Courses';
import Learning from './_components/Learning/Learning';
import Audience from './_components/Audience/Audience';

import Faq from './_components/Faq/Faq';
import Articles from './_components/Articles/Articles';
import Cta from './_components/Cta/Cta';

import PageSchema from './_components/PageSchema/PageSchema';
import BreadcrumbSchema from './_components/BreadcrumbSchema/BreadcrumbSchema';
import FaqSchema from './_components/FaqSchema/FaqSchema';

export const metadata: Metadata = {
  title: 'Курсы Таро онлайн — обучение Таро с нуля | InGenium',
  description:
    'Курсы Таро InGenium: системное обучение для начинающих и продолжающих. Структура колоды, Старшие и Младшие Арканы, символика, расклады и практика чтения карт.',

  alternates: {
    canonical: '/education/tarot',
  },

  openGraph: {
    title: 'Курсы Таро онлайн — обучение Таро | InGenium',
    description:
      'Системное обучение Таро: понимание структуры колоды, символики Арканов и практики чтения раскладов.',
    url: '/education/tarot',
    type: 'website',
  },
};

export default function TarotPage() {
  const courses = getCoursesByCategory('tarot');
  const articles = getArticlesByCategory('tarot').slice(0, 3);
  return (
    <>
      <LayoutShell>
        <PageSchema courses={courses} />
        <BreadcrumbSchema />
        <FaqSchema />
        <Hero />
        <Intro />
        <Courses courses={courses} />
        <Learning />
        <Audience />
        <Faq />
        <Articles articles={articles} />
        <Cta />
      </LayoutShell>
    </>
  );
}

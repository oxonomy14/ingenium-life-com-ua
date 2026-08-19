// src/app/education/jungian-psychology/page.tsx

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
  title:
    'Курсы юнгианской психологии онлайн — обучение психологии Юнга | InGenium',

  description:
    'Обучение юнгианской психологии в InGenium: архетипы, Тень, бессознательное, типология личности, функции сознания, сновидения и практические методы самопознания.',

  alternates: {
    canonical: '/education/jungian-psychology',
  },

  openGraph: {
    title: 'Курсы юнгианской психологии онлайн | InGenium',
    description:
      'Изучение аналитической психологии Карла Густава Юнга: бессознательное, архетипы, Тень, типология личности, функции сознания и работа со сновидениями.',
    url: '/education/jungian-psychology',
    type: 'website',
  },
};

export default function JungianPsychologyPage() {
  const courses = getCoursesByCategory('jungian-psychology');

  const articles = getArticlesByCategory('jungian-psychology').slice(0, 3);

  return (
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
  );
}

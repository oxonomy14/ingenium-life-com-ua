// src/app/education/astrology/page.tsx

import type { Metadata } from 'next';

import { getCoursesByCategory } from '@/lib/courses';
import { getArticlesByCategory } from '@/lib/articles';

import LayoutShell from '@/components/LayoutShell/LayoutShell';

import AstrologyHero from './_components/AstrologyHero/AstrologyHero';
import AstrologyIntro from './_components/AstrologyIntro/AstrologyIntro';
import AstrologyCourses from './_components/AstrologyCourses/AstrologyCourses';
import AstrologyLearning from './_components/AstrologyLearning/AstrologyLearning';
import AstrologyAudience from './_components/AstrologyAudience/AstrologyAudience';
import AstrologyFaq from './_components/AstrologyFaq/AstrologyFaq';
import AstrologyArticles from './_components/AstrologyArticles/AstrologyArticles';
import AstrologyCta from './_components/AstrologyCta/AstrologyCta';

import AstrologyPageSchema from './_components/AstrologyPageSchema/AstrologyPageSchema';
import AstrologyBreadcrumbSchema from './_components/AstrologyBreadcrumbSchema/AstrologyBreadcrumbSchema';
import AstrologyFaqSchema from './_components/AstrologyFaqSchema/AstrologyFaqSchema';

export const metadata: Metadata = {
  title: 'Курси астрології онлайн — навчання астрології | InGenium',

  description:
    'Курси астрології InGenium: системне навчання для початківців і тих, хто продовжує навчання. Натальна астрологія, прогнозування, стосунки та практична робота з картою.',

  alternates: {
    canonical: '/education/astrology',
  },

  openGraph: {
    title: 'Курси астрології онлайн | InGenium',

    description:
      'Системне навчання астрології: від основ до поглибленої практики роботи з натальною картою.',

    url: '/education/astrology',
    type: 'website',
  },
};

export default function AstrologyPage() {
  const courses = getCoursesByCategory('astrology');
  const articles = getArticlesByCategory('astrology').slice(0, 3);

  return (
    <LayoutShell>
      <AstrologyPageSchema courses={courses} />
      <AstrologyBreadcrumbSchema />
      <AstrologyFaqSchema />

      <AstrologyHero />
      <AstrologyIntro />
      <AstrologyCourses courses={courses} />
      <AstrologyLearning />
      <AstrologyAudience />
      <AstrologyFaq />
      <AstrologyArticles articles={articles} />
      <AstrologyCta />
    </LayoutShell>
  );
}

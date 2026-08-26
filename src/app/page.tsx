import type { Metadata } from 'next';

import PracticeLearning from '@/components/PracticeLearning/PracticeLearning';
import Hero from '@/components/Hero/Hero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import EducationDirections from '@/components/EducationDirections/EducationDirections';
import FeaturedPrograms from '@/components/FeaturedPrograms/FeaturedPrograms';
import LearningBenefits from '@/components/LearningBenefits/LearningBenefits';
import AuthorSection from '@/components/AuthorSection/AuthorSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import WebinarsSection from '@/components/WebinarsSection/WebinarsSection';
import LatestArticles from '@/components/LatestArticles/LatestArticles';
import FaqSection from '@/components/FaqSection/FaqSection';
import FinalCta from '@/components/FinalCta/FinalCta';
import FaqSchema from '@/components/Seo/FaqSchema/FaqSchema';
import { homeFaqItems } from '@/data/homeFaq';

export const metadata: Metadata = {
  title: {
    absolute: 'Школа астрології InGenium — навчання астрології онлайн',
  },

  description:
    'Онлайн-навчання астрології у школі InGenium. Авторські курси Павла Дементьєва з натальної астрології для початківців і практикуючих астрологів.',

  alternates: {
    canonical: 'https://ingenium-life.com.ua/',
    languages: {
      uk: 'https://ingenium-life.com.ua/',
      ru: 'https://ingenium-life.com/',
    },
  },

  openGraph: {
    title: 'Школа астрології InGenium — навчання астрології онлайн',
    description:
      'Авторські онлайн-курси Павла Дементьєва з натальної астрології для початківців і практикуючих астрологів.',
    url: 'https://ingenium-life.com.ua/',
    locale: 'uk_UA',
    alternateLocale: ['ru_RU'],
  },
};

export default function Home() {
  return (
    <>
      <FaqSchema items={homeFaqItems} />
      <LayoutShell>
        <Hero />
        <PracticeLearning />
        <EducationDirections />
        <FeaturedPrograms />
        <LearningBenefits />
        <AuthorSection />
        <TestimonialsSection />
        <WebinarsSection />
        <LatestArticles />
        <FaqSection />
        <FinalCta />
      </LayoutShell>
    </>
  );
}

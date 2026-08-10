import type { Metadata } from 'next';
import PracticeLearning from '@/components/PracticeLearning/PracticeLearning';
import Hero from '@/components/Hero/Hero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import EducationDirections from '@/components/EducationDirections/EducationDirections';
import FeaturedPrograms from '@/components/FeaturedPrograms/FeaturedPrograms';
import LearningBenefits from '@/components/LearningBenefits/LearningBenefits';
import AuthorSection from '@/components/AuthorSection/AuthorSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Школа астрологии InGenium — обучение астрологии онлайн',
  },

  description:
    'Онлайн-обучение астрологии в школе InGenium. Авторские курсы Павла Дементьева по натальной астрологии для начинающих и практикующих астрологов.',

  alternates: {
    canonical: '/',
    languages: {
      ru: '/',
      uk: '/uk',
      'x-default': '/',
    },
  },

  openGraph: {
    title: 'Школа астрологии InGenium — обучение астрологии онлайн',
    description:
      'Авторские онлайн-курсы Павла Дементьева по натальной астрологии для начинающих и практикующих астрологов.',
    url: '/',
  },
};

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <PracticeLearning />
      <EducationDirections />
      <FeaturedPrograms />
      <LearningBenefits />
      <AuthorSection />
      <TestimonialsSection />
    </LayoutShell>
  );
}

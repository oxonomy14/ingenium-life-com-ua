import type { Metadata } from 'next';

import Hero from '@/components/Hero/Hero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

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
    </LayoutShell>
  );
}

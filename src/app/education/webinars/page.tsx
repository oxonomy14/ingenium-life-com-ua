// src/app/webinars/page.tsx

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';

import { getWebinars } from '@/lib/webinars';

import Hero from './_components/Hero/Hero';
import Intro from './_components/Intro/Intro';
import WebinarCatalog from './_components/WebinarCatalog/WebinarCatalog';
import ClosedChannel from './_components/ClosedChannel/ClosedChannel';
import Faq from './_components/Faq/Faq';
import Cta from './_components/Cta/Cta';

import PageSchema from './_components/PageSchema/PageSchema';
import BreadcrumbSchema from './_components/BreadcrumbSchema/BreadcrumbSchema';
import FaqSchema from './_components/FaqSchema/FaqSchema';

export const metadata: Metadata = {
  title: 'Вебинары InGenium — астрология, Таро и психология',

  description:
    'Авторские вебинары InGenium по астрологии, Таро, юнгианской психологии, символам, личности и самопознанию.',

  alternates: {
    canonical: '/webinars',
  },

  openGraph: {
    title: 'Вебинары InGenium',
    description:
      'Авторские вебинары по астрологии, Таро и юнгианской психологии.',
    url: '/webinars',
    type: 'website',
  },
};

export default function WebinarsPage() {
  const webinars = getWebinars();

  return (
    <LayoutShell>
      {/*  <PageSchema /> */}
      <BreadcrumbSchema />
      <FaqSchema />

      <Hero />
      <Intro />

      <WebinarCatalog webinars={webinars} />
      <ClosedChannel />

      <Faq />
      <Cta />
    </LayoutShell>
  );
}

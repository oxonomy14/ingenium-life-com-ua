// src/app/contacts/page.tsx

import type { Metadata } from 'next';

import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';
import ContactPageSchema from '@/components/Seo/ContactPageSchema/ContactPageSchema';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import ContactsHero from '@/app/contacts/_components/ContactsHero/ContactsHero';
import ContactsInfo from '@/app/contacts/_components/ContactsInfo/ContactsInfo';
import ContactsCta from '@/app/contacts/_components/ContactsCta/ContactsCta';

export const metadata: Metadata = {
  title: 'Контакты InGenium Life',
  description:
    'Контакты InGenium Life. Свяжитесь с нами по вопросам обучения, консультаций, вебинаров и участия в проектах InGenium.',

  alternates: {
    canonical: '/contacts',
  },

  openGraph: {
    title: 'Контакты InGenium Life',
    description:
      'Свяжитесь с InGenium Life по вопросам обучения, консультаций, вебинаров и других проектов.',
    url: '/contacts',
  },
};

export default function ContactsPage() {
  return (
    <LayoutShell>
      <ContactPageSchema />
      <BreadcrumbSchema
        items={[
          {
            name: 'Главная',
            url: '/',
          },
          {
            name: 'Контакты',
            url: '/contacts',
          },
        ]}
      />

      <ContactsHero />
      <ContactsInfo />
      <ContactsCta />
    </LayoutShell>
  );
}

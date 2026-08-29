// src/app/contacts/page.tsx

import type { Metadata } from 'next';

import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';
import ContactPageSchema from '@/components/Seo/ContactPageSchema/ContactPageSchema';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import ContactsHero from '@/app/contacts/_components/ContactsHero/ContactsHero';
import ContactsInfo from '@/app/contacts/_components/ContactsInfo/ContactsInfo';
import ContactsCta from '@/app/contacts/_components/ContactsCta/ContactsCta';

export const metadata: Metadata = {
  title: 'Контакти InGenium Life',
  description:
    'Контакти InGenium Life. Зв’яжіться з нами з питань навчання, консультацій, вебінарів та участі в проєктах InGenium.',

  alternates: {
    canonical: '/contacts',
  },

  openGraph: {
    title: 'Контакти InGenium Life',
    description:
      'Зв’яжіться з InGenium Life з питань навчання, консультацій, вебінарів та інших проєктів.',
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
            name: 'Головна',
            url: '/',
          },
          {
            name: 'Контакти',
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

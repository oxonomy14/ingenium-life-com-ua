import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import LegalPage from '@/components/LegalPage/LegalPage';
import { legalPages } from '@/data/legalPages';

const page = legalPages.confpolicy;

export const metadata: Metadata = {
  title: page.title,

  description: page.description,

  alternates: {
    canonical: '/confpolicy',
  },

  openGraph: {
    title: page.title,
    description: page.description,
    url: '/confpolicy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LayoutShell>
      <LegalPage page={page} />
    </LayoutShell>
  );
}

import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import LegalPage from '@/components/LegalPage/LegalPage';
import { legalPages } from '@/data/legalPages';

const page = legalPages.oferta;

export const metadata: Metadata = {
  title: page.title,

  description: page.description,

  alternates: {
    canonical: '/oferta',
  },
};

export default function OfertaPage() {
  return (
    <LayoutShell>
      <LegalPage page={page} />
    </LayoutShell>
  );
}

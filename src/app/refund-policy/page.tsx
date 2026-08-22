import type { Metadata } from 'next';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import LegalPage from '@/components/LegalPage/LegalPage';
import { legalPages } from '@/data/legalPages';

const page = legalPages['refund-policy'];

export const metadata: Metadata = {
  title: page.title,

  description: page.description,

  alternates: {
    canonical: '/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <LayoutShell>
      <LegalPage page={page} />
    </LayoutShell>
  );
}

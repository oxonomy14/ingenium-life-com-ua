// src/app/consultations/page.tsx

import type { Metadata } from 'next';

import PageInDevelopment from '@/components/PageInDevelopment/PageInDevelopment';

export const metadata: Metadata = {
  title: 'Консультации',
  description:
    'Индивидуальные консультации InGenium Life. Информация о форматах и условиях консультаций.',
};

export default function ConsultationsPage() {
  return (
    <PageInDevelopment
      eyebrow="Консультации"
      title="Индивидуальные консультации"
      description="Мы готовим описание доступных форматов консультаций, направлений работы и условий записи."
    />
  );
}

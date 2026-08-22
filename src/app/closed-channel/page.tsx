// src/app/closed-channel/page.tsx

import type { Metadata } from 'next';

import PageInDevelopment from '@/components/PageInDevelopment/PageInDevelopment';

export const metadata: Metadata = {
  title: 'Закрытый канал InGenium',
  description:
    'Закрытый канал InGenium — вебинары, лекции и авторские материалы Павла Дементьева.',
};

export default function ClosedChannelPage() {
  return (
    <PageInDevelopment
      eyebrow="Закрытый InGenium"
      title="Закрытый канал InGenium"
      description="Здесь скоро появится подробная информация о формате закрытого канала, вебинарах, материалах и условиях участия."
    />
  );
}

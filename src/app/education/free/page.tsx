import type { Metadata } from 'next';

import PageInDevelopment from '@/components/PageInDevelopment/PageInDevelopment';

export const metadata: Metadata = {
  title: 'Бесплатные уроки',
  description:
    'Бесплатные видеоуроки InGenium Life по астрологии, Таро и психологии из образовательных программ проекта.',
};

export default function FreeEducationPage() {
  return (
    <PageInDevelopment
      eyebrow="Бесплатное обучение"
      title="Бесплатные видеоуроки"
      description="Здесь мы публикуем бесплатные видеоуроки из разных курсов InGenium Life. Раздел находится в разработке и скоро будет пополняться новыми материалами."
    />
  );
}

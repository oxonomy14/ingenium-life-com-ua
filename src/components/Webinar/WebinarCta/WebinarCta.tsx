// src/components/Webinar/WebinarCta/WebinarCta.tsx

import Link from 'next/link';

import type { Webinar } from '@/types/webinar';

import { convertAndFormatRubToUah, formatUah } from '@/lib/currency';

import Container from '@/components/Container/Container';

import css from './WebinarCta.module.css';

type WebinarCtaProps = {
  webinar: Webinar;
};

export default function WebinarCta({ webinar }: WebinarCtaProps) {
  if (!webinar.price) {
    return null;
  }

  const formattedPrice =
    webinar.price.currency === 'RUB'
      ? convertAndFormatRubToUah(webinar.price.amount)
      : formatUah(webinar.price.amount);

  return (
    <section className={css.section}>
      <Container>
        <div className={css.card}>
          <div className={css.content}>
            <span className={css.eyebrow}>Вебинар в записи</span>

            <h2 className={css.title}>{webinar.title}</h2>

            <p className={css.description}>
              Получите доступ к записи вебинара и материалам, которые входят в
              комплект.
            </p>
          </div>

          <div className={css.action}>
            <div className={css.priceBlock}>
              <span className={css.priceLabel}>Стоимость</span>

              <strong className={css.price}>{formattedPrice}</strong>
            </div>

            <Link
              href={`/contacts?webinar=${webinar.slug}`}
              className={css.button}
            >
              Приобрести запись
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

// src/components/Webinar/WebinarPricing/WebinarPricing.tsx

import Link from 'next/link';

import type { Webinar } from '@/types/webinar';

import { convertAndFormatRubToUah, formatUah } from '@/lib/currency';

import Container from '@/components/Container/Container';

import css from './WebinarPricing.module.css';

type WebinarPricingProps = {
  webinar: Webinar;
};

export default function WebinarPricing({ webinar }: WebinarPricingProps) {
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
            <span className={css.eyebrow}>Доступ к вебинару</span>

            <h2 className={css.title}>Приобрести запись</h2>

            <p className={css.description}>
              После приобретения вы получите доступ к записи вебинара и
              материалам, указанным на странице.
            </p>

            {webinar.materials && webinar.materials.length > 0 && (
              <ul className={css.materials}>
                {webinar.materials.map((material) => (
                  <li key={material} className={css.material}>
                    {material}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={css.purchase}>
            <span className={css.priceLabel}>Стоимость</span>

            <strong className={css.price}>{formattedPrice}</strong>

            <Link
              href={`/contacts?webinar=${webinar.slug}`}
              className={css.button}
            >
              Приобрести запись
            </Link>

            <p className={css.note}>
              После обращения мы уточним детали оплаты и предоставления доступа.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

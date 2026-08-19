// src/components/Webinar/WebinarHero/WebinarHero.tsx

import Image from 'next/image';

import type { Webinar } from '@/types/webinar';

import { convertAndFormatRubToUah, formatUah } from '@/lib/currency';

import Container from '@/components/Container/Container';

import css from './WebinarHero.module.css';

type WebinarHeroProps = {
  webinar: Webinar;
};

export default function WebinarHero({ webinar }: WebinarHeroProps) {
  const formattedPrice = webinar.price
    ? webinar.price.currency === 'RUB'
      ? convertAndFormatRubToUah(webinar.price.amount)
      : formatUah(webinar.price.amount)
    : null;

  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.content}>
            <div className={css.topline}>
              <span className={css.category}>{webinar.labelCategory}</span>

              {webinar.channelWebinar && (
                <span className={css.channelBadge}>Закрытый InGenium</span>
              )}
            </div>

            <h1 className={css.title}>{webinar.title}</h1>

            {webinar.subtitle && (
              <p className={css.subtitle}>{webinar.subtitle}</p>
            )}

            <p className={css.description}>{webinar.shortDescription}</p>

            <div className={css.meta}>
              {webinar.format && (
                <div className={css.metaItem}>
                  <span className={css.metaLabel}>Формат</span>

                  <span className={css.metaValue}>{webinar.format}</span>
                </div>
              )}

              {webinar.duration && (
                <div className={css.metaItem}>
                  <span className={css.metaLabel}>Продолжительность</span>

                  <span className={css.metaValue}>{webinar.duration}</span>
                </div>
              )}

              {webinar.webinarYear && (
                <div className={css.metaItem}>
                  <span className={css.metaLabel}>Год</span>

                  <span className={css.metaValue}>{webinar.webinarYear}</span>
                </div>
              )}
            </div>

            {formattedPrice && (
              <div className={css.priceBlock}>
                <span className={css.priceLabel}>Стоимость</span>

                <strong className={css.price}>{formattedPrice}</strong>
              </div>
            )}
          </div>

          <div className={css.imageWrapper}>
            <Image
              src={webinar.image}
              alt={webinar.imageAlt || webinar.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={css.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

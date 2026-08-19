import Image from 'next/image';
import Link from 'next/link';

import type { Webinars } from '@/types/webinar';

import { formatRub, formatUah, convertAndFormatRubToUah } from '@/lib/currency';

import css from './WebinarCard.module.css';

type WebinarCardProps = {
  webinar: Webinars;
};

export default function WebinarCard({ webinar }: WebinarCardProps) {
  return (
    <article className={css.card}>
      <Link
        href={`/webinars/${webinar.slug}`}
        className={css.imageLink}
        aria-label={`Открыть вебинар ${webinar.title}`}
      >
        <div className={css.imageWrapper}>
          <Image
            src={webinar.image}
            alt={webinar.imageAlt || webinar.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={css.image}
          />

          <div className={css.badges}>
            <span className={css.category}>{webinar.labelCategory}</span>

            {webinar.channelWebinar && (
              <span className={css.channelBadge}>Закрытый InGenium</span>
            )}
          </div>
        </div>
      </Link>

      <div className={css.content}>
        <div className={css.meta}>
          <span>{webinar.format || 'Вебинар в записи'}</span>

          {webinar.duration && (
            <>
              <span className={css.separator} aria-hidden="true">
                ·
              </span>

              <span>{webinar.duration}</span>
            </>
          )}

          {webinar.webinarYear && (
            <>
              <span className={css.separator} aria-hidden="true">
                ·
              </span>

              <span>{webinar.webinarYear}</span>
            </>
          )}
        </div>

        <h3 className={css.title}>
          <Link href={`/webinars/${webinar.slug}`} className={css.titleLink}>
            {webinar.title}
          </Link>
        </h3>

        {webinar.shortDescription && (
          <p className={css.description}>{webinar.shortDescription}</p>
        )}

        <div className={css.footer}>
          {webinar.price ? (
            <div className={css.price}>
              <span className={css.priceLabel}>Стоимость</span>

              <strong className={css.priceValue}>
                {webinar.price.currency === 'RUB'
                  ? convertAndFormatRubToUah(webinar.price.amount)
                  : formatUah(webinar.price.amount)}
              </strong>
            </div>
          ) : (
            <span className={css.pricePlaceholder}>Подробнее</span>
          )}

          <Link
            href={`/education/webinars/${webinar.slug}`}
            className={css.link}
          >
            Подробнее
            <span className={css.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

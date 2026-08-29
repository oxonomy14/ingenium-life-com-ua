import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import { convertAndFormatRubToUah, formatRub, formatUah } from '@/lib/currency';

import css from './CourseHero.module.css';

type CourseHeroProps = {
  course: Course;
};

export default function CourseHero({ course }: CourseHeroProps) {
  const {
    title,
    subtitle,
    category,
    level,
    format,
    lessonCount,
    lessonDuration,
    image,
    imageAlt,
    price,
  } = course;

  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>{category}</p>

            <h1 className={css.title}>{title}</h1>

            {subtitle && <p className={css.subtitle}>{subtitle}</p>}

            <div className={css.meta}>
              {level && <span className={css.metaItem}>{level}</span>}

              {format && <span className={css.metaItem}>{format}</span>}

              {lessonCount && (
                <span className={css.metaItem}>{lessonCount} занять</span>
              )}

              {lessonDuration && (
                <span className={css.metaItem}>{lessonDuration}</span>
              )}
            </div>

            <div className={css.actions}>
              <Link href="#course-program" className={css.primaryButton}>
                Переглянути програму
              </Link>

              <Link href="#course-order" className={css.secondaryButton}>
                Дізнатися вартість
              </Link>
            </div>

            {price && (
              <div className={css.priceBlock}>
                {price.label && <p className={css.priceLabel}>{price.label}</p>}

                {price.currency === 'RUB' ? (
                  <>
                    <p className={css.price}>
                      ≈ {convertAndFormatRubToUah(price.amount)}
                    </p>

                    {/* <p className={css.originalPrice}>
                      {formatRub(price.amount)}
                    </p> */}
                  </>
                ) : (
                  <p className={css.price}>{formatUah(price.amount)}</p>
                )}
              </div>
            )}
          </div>

          <div className={css.visual}>
            <div className={css.imageWrapper}>
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className={css.image}
                />
              ) : (
                <div className={css.imagePlaceholder}>
                  <span>InGenium</span>
                </div>
              )}
            </div>

            <div className={css.decor} aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}

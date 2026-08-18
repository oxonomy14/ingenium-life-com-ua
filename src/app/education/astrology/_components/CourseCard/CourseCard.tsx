import Image from 'next/image';
import Link from 'next/link';

import type { Course } from '@/lib/courses';

import css from './CourseCard.module.css';

import { convertAndFormatRubToUah, formatRub, formatUah } from '@/lib/currency';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className={css.card}>
      <Link
        href={`/education/astrology/${course.slug}`}
        className={css.imageLink}
      >
        <div className={css.imageWrapper}>
          {course.image && (
            <Image
              src={course.image}
              alt={course.imageAlt || course.title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={css.image}
            />
          )}
        </div>
      </Link>

      <div className={css.content}>
        <div className={css.meta}>
          {course.level && <span className={css.metaItem}>{course.level}</span>}

          {course.format && (
            <span className={css.metaItem}>{course.format}</span>
          )}
          {course.courseYear && (
            <span className={css.metaItem}>{course.courseYear}</span>
          )}
        </div>

        <h3 className={css.title}>
          <Link href={`/education/astrology/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {course.shortDescription && (
          <p className={css.description}>{course.shortDescription}</p>
        )}

        <div className={css.footer}>
          {course.price && (
            <p className={css.price}>
              {course.price.currency === 'RUB'
                ? `≈ ${convertAndFormatRubToUah(course.price.amount)}`
                : formatUah(course.price.amount)}
            </p>
          )}

          <Link
            href={`/education/astrology/${course.slug}`}
            className={css.link}
          >
            Подробнее
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

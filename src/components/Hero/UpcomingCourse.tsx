import Image from 'next/image';
import Link from 'next/link';

import type { Course } from '@/lib/courses';

import css from './Hero.module.css';

type UpcomingCourseProps = {
  course: Course;
  status: 'upcoming' | 'past';
};

function formatCourseDate(date: string) {
  return new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
    .format(new Date(`${date}T00:00:00`))
    .replace(' р.', '');
}

export default function UpcomingCourse({
  course,
  status,
}: UpcomingCourseProps) {
  const href = `/education/${course.categorySlug}/${course.slug}`;

  const headerTitle =
    status === 'upcoming' ? 'Найближчий курс' : 'Попередній онлайн-курс';

  return (
    <aside className={css.promoCard}>
      <div className={css.promoHeader}>
        <span className={css.promoEyebrow}>{headerTitle}</span>

        {course.startDate && (
          <span className={css.promoDate}>
            {status === 'upcoming' ? 'З ' : ''}
            {formatCourseDate(course.startDate)}
          </span>
        )}
      </div>

      {course.image && (
        <Link href={href} className={css.promoImageLink}>
          <div className={css.promoImageWrapper}>
            <Image
              src={course.image}
              alt={course.imageAlt || course.title}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 42vw"
              className={css.promoImage}
            />

            {course.heroPromo?.label && (
              <span className={css.promoBadge}>{course.heroPromo.label}</span>
            )}
          </div>
        </Link>
      )}

      <div className={css.promoContent}>
        <h2 className={css.promoTitle}>
          <Link href={href}>{course.title}</Link>
        </h2>

        {(course.subtitle || course.shortDescription) && (
          <p className={css.promoDescription}>
            {course.subtitle || course.shortDescription}
          </p>
        )}

        <Link href={href} className={css.promoLink}>
          Детальніше про курс
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}

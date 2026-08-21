import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './ArticleCourseBanner.module.css';

import type { Course } from '@/lib/courses';

type ArticleCourseBannerProps = {
  course: Course;
  href: string;
};

export default function ArticleCourseBanner({
  course,
  href,
}: ArticleCourseBannerProps) {
  if (!course || !course.image) {
    return null;
  }
  return (
    <section className={css.section}>
      <Container>
        <div className={css.banner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Обучение InGenium</p>

            <p className={css.category}>{course.category}</p>

            <h2 className={css.title}>{course.title}</h2>

            <p className={css.description}>{course.shortDescription}</p>

            <Link href={href} className={css.button}>
              Подробнее о курсе
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={css.imageWrapper}>
            <Image
              src={course.image}
              alt={course.imageAlt ?? course.title}
              fill
              sizes="(max-width: 767px) 100vw, 480px"
              className={css.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';

import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import css from './CourseCta.module.css';

type CourseCtaProps = {
  course: Course;
};

export default function CourseCta({ course }: CourseCtaProps) {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Остались вопросы?</p>

            <h2 className={css.title}>
              Узнайте больше о курсе
              <span> {course.title}</span>
            </h2>

            <p className={css.description}>
              Если хотите уточнить формат обучения, варианты оплаты или понять,
              подходит ли вам программа, свяжитесь с нами.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="/contacts" className={css.primaryButton}>
              Связаться с нами
            </Link>

            <Link href="#course-program" className={css.secondaryButton}>
              Посмотреть программу
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

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
            <p className={css.eyebrow}>Залишилися запитання?</p>

            <h2 className={css.title}>
              Дізнайтеся більше про курс
              <span> {course.title}</span>
            </h2>

            <p className={css.description}>
              Якщо хочете уточнити формат навчання, варіанти оплати або
              зрозуміти, чи підходить вам програма, зв’яжіться з нами.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="/contacts" className={css.primaryButton}>
              Зв’язатися з нами
            </Link>

            <Link href="#course-program" className={css.secondaryButton}>
              Переглянути програму
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

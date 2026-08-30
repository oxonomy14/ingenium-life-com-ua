import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import css from './CourseParts.module.css';

type CoursePartsProps = {
  course: Course;
};

export default function CourseParts({ course }: CoursePartsProps) {
  const { courseParts } = course;

  if (!courseParts?.length) {
    return null;
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Структура курсу</p>

          <h2 className={css.title}>З чого складається навчання</h2>

          <p className={css.description}>
            Курс побудований послідовно: від окремих елементів і принципів до
            цілісного аналізу та практичної роботи.
          </p>
        </div>

        <div className={css.grid}>
          {courseParts.map((part, index) => (
            <article key={`${part.title}-${index}`} className={css.card}>
              <div className={css.cardHeader}>
                <span className={css.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {part.lessons && (
                  <span className={css.lessons}>{part.lessons} занять</span>
                )}
              </div>

              <h3 className={css.cardTitle}>{part.title}</h3>

              {part.description && (
                <p className={css.cardDescription}>{part.description}</p>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

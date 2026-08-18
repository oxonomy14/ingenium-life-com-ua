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
          <p className={css.eyebrow}>Структура курса</p>

          <h2 className={css.title}>Из чего состоит обучение</h2>

          <p className={css.description}>
            Курс построен последовательно: от отдельных элементов и принципов к
            целостному анализу и практической работе.
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
                  <span className={css.lessons}>{part.lessons} занятий</span>
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

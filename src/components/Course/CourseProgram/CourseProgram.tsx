import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import css from './CourseProgram.module.css';

type CourseProgramProps = {
  course: Course;
};

export default function CourseProgram({ course }: CourseProgramProps) {
  const { program } = course;

  if (!program?.length) {
    return null;
  }

  return (
    <section className={css.section} id="course-program">
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Програма</p>

          <h2 className={css.title}>Програма курсу</h2>

          <p className={css.description}>
            Програма побудована послідовно: від базових принципів до
            самостійного аналізу та практичної роботи.
          </p>
        </div>

        <div className={css.modules}>
          {program.map((module, index) => (
            <article key={`${module.title}-${index}`} className={css.module}>
              <div className={css.moduleHeader}>
                <span className={css.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={css.heading}>
                  <h3 className={css.moduleTitle}>{module.title}</h3>

                  {module.description && (
                    <p className={css.moduleDescription}>
                      {module.description}
                    </p>
                  )}
                </div>
              </div>

              {module.lessons?.length && (
                <ul className={css.lessons}>
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={`${lesson}-${lessonIndex}`} className={css.lesson}>
                      <span className={css.lessonNumber}>
                        {String(lessonIndex + 1).padStart(2, '0')}
                      </span>

                      <span className={css.lessonTitle}>{lesson}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

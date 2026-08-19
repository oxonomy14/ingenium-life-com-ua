// src/app/education/jungian-psychology/_components/Courses/Courses.tsx

import Container from '@/components/Container/Container';
import CourseCard from '../CourseCard/CourseCard';

import type { Course } from '@/lib/courses';

import css from './Courses.module.css';

type CoursesProps = {
  courses: Course[];
};

export default function Courses({ courses }: CoursesProps) {
  if (!courses.length) {
    return null;
  }

  return (
    <section id="courses" className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Программы обучения</p>

          <h2 className={css.title}>Курсы юнгианской психологии</h2>

          <p className={css.description}>
            Программы для системного изучения аналитической психологии,
            психологической типологии и процессов бессознательного.
          </p>
        </div>

        <div className={css.grid}>
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}

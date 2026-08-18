// src/app/education/tarot/_components/Courses/Courses.tsx

import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import CourseCard from '../CourseCard/CourseCard';

import css from './Courses.module.css';

type CoursesProps = {
  courses: Course[];
};

export default function Courses({ courses }: CoursesProps) {
  if (!courses.length) {
    return null;
  }

  return (
    <section id="tarot-courses" className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Программы обучения</p>

          <h2 className={css.title}>Курсы по Таро</h2>

          <p className={css.description}>
            Выберите программу в зависимости от уровня подготовки и тем, которые
            хотите изучить глубже — от знакомства с системой Таро до углублённой
            практики чтения карт.
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

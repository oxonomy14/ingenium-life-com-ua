import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import CourseCard from '../CourseCard/CourseCard';

import css from './AstrologyCourses.module.css';

type AstrologyCoursesProps = {
  courses: Course[];
};

export default function AstrologyCourses({ courses }: AstrologyCoursesProps) {
  if (!courses.length) {
    return null;
  }

  return (
    <section className={css.section} id="astrology-courses">
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Программы обучения</p>

          <h2 className={css.title}>Курсы по астрологии</h2>

          <p className={css.description}>
            Выберите программу в зависимости от уровня подготовки и направления,
            которое хотите изучить глубже.
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

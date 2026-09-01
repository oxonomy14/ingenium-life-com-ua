// src/components/FreeLessons/FreeLessons.tsx

import Container from '@/components/Container/Container';
import FreeLessonsClient from './FreeLessonsClient';

import { getAllCourses } from '@/lib/courses';

import css from './FreeLessons.module.css';

export default function FreeLessons() {
  const courses = getAllCourses().filter(
    (course) =>
      course.published &&
      course.previewLesson?.enabled &&
      course.previewLesson?.vimeoId,
  );

  if (!courses.length) {
    return null;
  }

  return (
    <section id="free-lessons" className={css.section}>
      <Container>
        <div className={css.header}>
          <span className={css.eyebrow}>Відкриті матеріали</span>

          <h2 className={css.title}>Безкоштовні заняття</h2>

          <p className={css.description}>
            Перегляньте відкриті заняття з програм InGenium і познайомтеся з
            нашим підходом до навчання.
          </p>
        </div>

        <FreeLessonsClient courses={courses} />
      </Container>
    </section>
  );
}

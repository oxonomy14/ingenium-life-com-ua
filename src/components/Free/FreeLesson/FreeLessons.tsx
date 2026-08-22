// src/components/FreeLessons/FreeLessons.tsx

import Container from '@/components/Container/Container';
import FreeLessonCard from '@/components/Free/FreeLessonCard/FreeLessonCard';

import { getFreeLessons } from '@/data/freeLessons';

import css from './FreeLessons.module.css';

export default function FreeLessons() {
  const lessons = getFreeLessons();

  return (
    <section className={css.section} id="free-lessons">
      <Container>
        <div className={css.header}>
          <span className={css.eyebrow}>Открытые материалы</span>

          <h2 className={css.title}>Бесплатные занятия</h2>

          <p className={css.description}>
            Посмотрите отдельные занятия из программ InGenium и познакомьтесь с
            нашим подходом к обучению.
          </p>
        </div>

        <div className={css.grid}>
          {lessons.map((lesson) => (
            <FreeLessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      </Container>
    </section>
  );
}

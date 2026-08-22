// src/components/FreeLessons/FreeLessons.tsx

'use client';

import { useState } from 'react';

import Container from '@/components/Container/Container';
import FreeLessonCard from '@/components/Free/FreeLessonCard/FreeLessonCard';

import { getFreeLessons } from '@/data/freeLessons';

import css from './FreeLessons.module.css';

export default function FreeLessons() {
  const lessons = getFreeLessons();

  const [activeLessonSlug, setActiveLessonSlug] = useState<string | null>(null);

  const handlePlay = (slug: string) => {
    setActiveLessonSlug((currentSlug) => (currentSlug === slug ? null : slug));
  };

  return (
    <section id="free-lessons" className={css.section}>
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
            <FreeLessonCard
              key={lesson.slug}
              lesson={lesson}
              isPlaying={activeLessonSlug === lesson.slug}
              onPlay={() => handlePlay(lesson.slug)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

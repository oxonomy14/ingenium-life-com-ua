// src/components/FreeLessons/FreeLessonsClient.tsx

'use client';

import { useState } from 'react';

import FreeLessonCard from '@/components/Free/FreeLessonCard/FreeLessonCard';

import type { Course } from '@/lib/courses';

import css from './FreeLessons.module.css';

interface FreeLessonsClientProps {
  courses: Course[];
}

export default function FreeLessonsClient({ courses }: FreeLessonsClientProps) {
  const [activeLessonSlug, setActiveLessonSlug] = useState<string | null>(null);

  const handlePlay = (slug: string) => {
    setActiveLessonSlug((currentSlug) => (currentSlug === slug ? null : slug));
  };

  return (
    <div className={css.grid}>
      {courses.map((course) => (
        <FreeLessonCard
          key={course.slug}
          course={course}
          isPlaying={activeLessonSlug === course.slug}
          onPlay={() => handlePlay(course.slug)}
        />
      ))}
    </div>
  );
}

// src/components/Free/FreeLessonCard/FreeLessonCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';

import type { Course } from '@/lib/courses';

import css from './FreeLessonCard.module.css';

interface FreeLessonCardProps {
  course: Course;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function FreeLessonCard({
  course,
  isPlaying,
  onPlay,
}: FreeLessonCardProps) {
  const lesson = course.previewLesson;

  if (!lesson?.enabled || !lesson.vimeoId) {
    return null;
  }

  const courseHref = `/education/${course.categorySlug}/${course.slug}`;

  const videoUrl = lesson.vimeoHash
    ? `https://player.vimeo.com/video/${lesson.vimeoId}?h=${lesson.vimeoHash}&badge=0&autopause=0&autoplay=1`
    : `https://player.vimeo.com/video/${lesson.vimeoId}?badge=0&autopause=0&autoplay=1`;

  const lessonTitle = lesson.videoTitle || course.title;

  const lessonDescription =
    lesson.lessonDescription || course.shortDescription || course.description;

  return (
    <article className={css.card}>
      <div className={css.media}>
        {isPlaying ? (
          <iframe
            className={css.video}
            src={videoUrl}
            title={lessonTitle}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            {course.image && (
              <Image
                src={course.image}
                alt={course.imageAlt || course.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className={css.image}
              />
            )}

            <button
              type="button"
              className={css.playButton}
              onClick={onPlay}
              aria-label={`Дивитися заняття: ${lessonTitle}`}
            >
              <FaPlay />
            </button>
          </>
        )}
      </div>

      <div className={css.content}>
        <div className={css.meta}>
          <span className={css.category}>{course.category}</span>

          {lesson.duration && (
            <span className={css.duration}>{lesson.duration}</span>
          )}
        </div>

        <h2 className={css.title}>{lessonTitle}</h2>

        {lessonDescription && (
          <p className={css.description}>{lessonDescription}</p>
        )}

        <div className={css.actions}>
          <button type="button" className={css.watchButton} onClick={onPlay}>
            {isPlaying ? 'Закрити заняття' : 'Дивитися заняття'}
          </button>

          <Link href={courseHref} className={css.courseLink}>
            Повний курс →
          </Link>
        </div>
      </div>
    </article>
  );
}

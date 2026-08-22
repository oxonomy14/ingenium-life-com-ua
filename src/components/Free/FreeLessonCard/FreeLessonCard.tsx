import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';

import type { FreeLesson } from '@/data/freeLessons';

import css from './FreeLessonCard.module.css';

interface FreeLessonCardProps {
  lesson: FreeLesson;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function FreeLessonCard({
  lesson,
  isPlaying,
  onPlay,
}: FreeLessonCardProps) {
  const courseHref = lesson.courseSlug
    ? `/education/${lesson.category}/${lesson.courseSlug}`
    : null;

  return (
    <article className={css.card}>
      <div className={css.media}>
        {isPlaying ? (
          <iframe
            className={css.video}
            src={`https://player.vimeo.com/video/${lesson.vimeoId}?h=${lesson.vimeoHash}&badge=0&autopause=0&autoplay=1`}
            title={lesson.title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={lesson.image}
              alt={lesson.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className={css.image}
            />

            <button
              type="button"
              className={css.playButton}
              onClick={onPlay}
              aria-label={`Смотреть урок: ${lesson.title}`}
            >
              <FaPlay />
            </button>
          </>
        )}
      </div>

      <div className={css.content}>
        <div className={css.meta}>
          <span className={css.category}>{lesson.categoryLabel}</span>

          {lesson.duration && (
            <span className={css.duration}>{lesson.duration}</span>
          )}
        </div>

        <h2 className={css.title}>{lesson.title}</h2>

        <p className={css.description}>{lesson.description}</p>

        <div className={css.actions}>
          <button type="button" className={css.watchButton} onClick={onPlay}>
            {isPlaying ? 'Закрыть урок' : 'Смотреть урок'}
          </button>

          {courseHref && lesson.courseTitle && (
            <Link href={courseHref} className={css.courseLink}>
              Полный курс →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

import type { Course } from '@/lib/courses';

import css from './CoursePreviewLesson.module.css';
import Container from '@/components/Container/Container';

type CoursePreviewLessonProps = {
  course: Course;
};

export default function CoursePreviewLesson({
  course,
}: CoursePreviewLessonProps) {
  const lesson = course.previewLesson;

  if (!lesson?.enabled || !lesson.vimeoId) {
    return null;
  }

  const videoUrl = lesson.vimeoHash
    ? `https://player.vimeo.com/video/${lesson.vimeoId}?h=${lesson.vimeoHash}&title=0&byline=0&portrait=0`
    : `https://player.vimeo.com/video/${lesson.vimeoId}?title=0&byline=0&portrait=0`;

  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.header}>
            <p className={css.eyebrow}>Открытое занятие</p>

            <h2 className={css.title}>Посмотрите первое занятие интенсива</h2>

            {lesson.description && (
              <p className={css.description}>{lesson.description}</p>
            )}
          </div>

          <div className={css.videoWrapper}>
            <iframe
              src={videoUrl}
              title={lesson.videoTitle || 'Первое занятие курса'}
              className={css.video}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className={css.lessonInfo}>
            <div className={css.lessonContent}>
              {lesson.lessonTitle && (
                <h3 className={css.lessonTitle}>{lesson.lessonTitle}</h3>
              )}

              {lesson.lessonDescription?.map((paragraph, index) => (
                <p key={index} className={css.lessonDescription}>
                  {paragraph}
                </p>
              ))}

              {lesson.lessonTopics && lesson.lessonTopics.length > 0 && (
                <ul className={css.lessonTopics}>
                  {lesson.lessonTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              )}
            </div>

            <a href="#course-order" className={css.cta}>
              Получить полный курс
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

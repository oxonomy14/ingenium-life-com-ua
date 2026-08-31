import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import css from './CourseMeta.module.css';

import { formatDate } from '@/lib/formateDate';

type CourseMetaProps = {
  course: Course;
};

export default function CourseMeta({ course }: CourseMetaProps) {
  const {
    format,
    language,
    startDate,
    courseYear,
    lessonCount,
    lessonDuration,
    certificate,
  } = course;

  const items = [
    lessonCount
      ? {
          label: 'Занять',
          value: String(lessonCount),
        }
      : null,

    lessonDuration
      ? {
          label: 'Тривалість заняття',
          value: lessonDuration,
        }
      : null,

    format
      ? {
          label: 'Формат',
          value: format,
        }
      : null,

    language
      ? {
          label: 'Мова викладання',
          value: language,
        }
      : null,

    courseYear
      ? {
          label: 'Рік проведення',
          value: String(courseYear),
        }
      : null,

    startDate
      ? {
          label: 'Дата проведення',
          value: formatDate(startDate),
        }
      : null,

    certificate
      ? {
          label: 'Сертифікат',
          value: 'Передбачено',
        }
      : null,
  ].filter(Boolean) as {
    label: string;
    value: string;
  }[];

  if (!items.length) {
    return null;
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          {items.map((item) => (
            <div key={item.label} className={css.item}>
              <p className={css.label}>{item.label}</p>

              <p className={css.value}>{item.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from '@/components/Container/Container';

import type { Course } from '@/lib/courses';

import css from './CourseMeta.module.css';

type CourseMetaProps = {
  course: Course;
};

export default function CourseMeta({ course }: CourseMetaProps) {
  const { format, courseYear, lessonCount, lessonDuration, certificate } =
    course;

  const items = [
    lessonCount
      ? {
          label: 'Занятий',
          value: String(lessonCount),
        }
      : null,

    lessonDuration
      ? {
          label: 'Продолжительность занятия',
          value: lessonDuration,
        }
      : null,

    format
      ? {
          label: 'Формат',
          value: format,
        }
      : null,

    courseYear
      ? {
          label: 'Год проведения курса',
          value: String(courseYear),
        }
      : null,

    certificate
      ? {
          label: 'Сертификат',
          value: 'Предусмотрен',
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

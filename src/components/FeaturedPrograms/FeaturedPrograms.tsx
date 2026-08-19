// src/components/FeaturedPrograms/FeaturedPrograms.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';
import { getAllCourses } from '@/lib/courses';

import css from './FeaturedPrograms.module.css';

const featuredCourseSlugs = [
  'natal-astrology-v2',
  'tarot-keys-of-reality',
  'functions-of-consciousness',
];

export default function FeaturedPrograms() {
  const allCourses = getAllCourses();

  const programs = featuredCourseSlugs
    .map((slug) => allCourses.find((course) => course.slug === slug))
    .filter((course) => course !== undefined);

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Обучение</p>

            <h2 className={css.title}>
              Популярные
              <span> программы InGenium</span>
            </h2>
          </div>

          <Link href="/education" className={css.allLink}>
            Все программы
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={css.grid}>
          {programs.map((program) => (
            <article className={css.card} key={program.slug}>
              <div>
                <p className={css.category}>{program.category}</p>

                <h3 className={css.cardTitle}>{program.title}</h3>

                <p className={css.description}>
                  {program.shortDescription || program.description}
                </p>

                <div className={css.meta}>
                  {program.format && <span>{program.format}</span>}

                  {program.lessonCount && (
                    <span>{program.lessonCount} уроков</span>
                  )}
                </div>
              </div>

              <Link
                href={`/education/${program.categorySlug}/${program.slug}`}
                className={css.cardLink}
                aria-label={`Подробнее о курсе ${program.title}`}
              >
                Подробнее
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

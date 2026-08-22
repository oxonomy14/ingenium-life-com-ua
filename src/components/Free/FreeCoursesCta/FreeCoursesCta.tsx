// src/components/FreeCoursesCta/FreeCoursesCta.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './FreeCoursesCta.module.css';

export default function FreeCoursesCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <span className={css.eyebrow}>Продолжить обучение</span>

            <h2 className={css.title}>Хотите изучить тему системно?</h2>

            <p className={css.description}>
              Бесплатные уроки помогают познакомиться с подходом InGenium. В
              полных программах темы разбираются последовательно — от базовых
              принципов до практики и самостоятельного анализа.
            </p>
          </div>

          <Link href="/education" className={css.button}>
            Все программы обучения
          </Link>
        </div>
      </Container>
    </section>
  );
}

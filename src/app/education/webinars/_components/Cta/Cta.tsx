// src/app/education/jungian-psychology/_components/Cta/Cta.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './Cta.module.css';

export default function Cta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Начать обучение</p>

            <h2 className={css.title}>
              Выберите программу по юнгианской психологии
            </h2>

            <p className={css.description}>
              Изучайте аналитическую психологию последовательно — от базовых
              идей и психологической типологии до более глубокого понимания
              бессознательных процессов, символов и внутренней динамики
              личности.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="#courses" className={css.primaryButton}>
              Смотреть программы
            </Link>

            <Link href="/contacts" className={css.secondaryButton}>
              Задать вопрос
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

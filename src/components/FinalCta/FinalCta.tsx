import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Начать обучение</p>

            <h2 className={css.title}>
              Выберите программу
              <span> и двигайтесь глубже</span>
            </h2>

            <p className={css.description}>
              Познакомьтесь с направлениями InGenium и найдите программу,
              которая подходит вашему уровню подготовки и интересам.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="/education" className={css.primaryButton}>
              Смотреть программы
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/articles" className={css.secondaryButton}>
              Читать статьи
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

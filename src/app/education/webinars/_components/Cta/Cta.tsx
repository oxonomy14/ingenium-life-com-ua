// src/app/webinars/_components/Cta/Cta.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './Cta.module.css';

export default function Cta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.card}>
          <div className={css.content}>
            <span className={css.eyebrow}>Вебинары InGenium</span>

            <h2 className={css.title}>
              Выберите тему, которая сейчас для вас актуальна
            </h2>

            <p className={css.description}>
              В каталоге собраны записи вебинаров Павла Дементьева по
              астрологии, Таро и юнгианской психологии. Отдельные записи можно
              приобрести независимо от подписки.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="#webinars" className={css.primaryButton}>
              Смотреть вебинары
            </Link>

            <Link href="/closed-channel" className={css.secondaryButton}>
              О закрытом канале
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

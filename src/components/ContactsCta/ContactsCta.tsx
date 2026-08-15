// src/components/ContactsCta/ContactsCta.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './ContactsCta.module.css';

export default function ContactsCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div>
            <p className={css.eyebrow}>Консультации</p>

            <h2 className={css.title}>
              Хотите записаться
              <span> на консультацию?</span>
            </h2>

            <p className={css.description}>
              Посмотрите доступные форматы консультаций и выберите подходящий
              вариант.
            </p>
          </div>

          <Link href="/consultations" className={css.link}>
            Перейти к консультациям
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

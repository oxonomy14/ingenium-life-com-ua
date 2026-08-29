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
            <p className={css.eyebrow}>Консультації</p>

            <h2 className={css.title}>
              Хочете записатися
              <span> на консультацію?</span>
            </h2>

            <p className={css.description}>
              Перегляньте доступні формати консультацій та оберіть відповідний
              варіант.
            </p>
          </div>

          <Link href="/consultations" className={css.link}>
            Перейти до консультацій
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

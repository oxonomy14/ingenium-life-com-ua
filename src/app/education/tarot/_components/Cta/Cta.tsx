// src/app/education/tarot/_components/Cta/Cta.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './Cta.module.css';

export default function Cta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Начните обучение</p>

            <h2 className={css.title}>
              Выберите свой путь
              <span> в изучении Таро</span>
            </h2>

            <p className={css.description}>
              Изучите программы InGenium и выберите курс, соответствующий вашему
              уровню подготовки, интересам и задачам.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="#tarot-courses" className={css.primaryButton}>
              Смотреть курсы
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

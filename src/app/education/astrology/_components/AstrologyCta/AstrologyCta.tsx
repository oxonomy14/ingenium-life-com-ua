import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AstrologyCta.module.css';

export default function AstrologyCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Начните обучение</p>

            <h2 className={css.title}>
              Выберите свой путь
              <span> в изучении астрологии</span>
            </h2>

            <p className={css.description}>
              Изучите программы InGenium и выберите курс, соответствующий вашему
              уровню подготовки, интересам и задачам.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="#astrology-courses" className={css.primaryButton}>
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

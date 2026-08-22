import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AboutCTA.module.css';

export default function AboutCTA() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <p className={css.eyebrow}>Следующий шаг</p>

          <h2 className={css.title}>
            Начните с того,
            <span> что вам сейчас ближе</span>
          </h2>

          <p className={css.description}>
            Можно начать с открытых материалов, познакомиться с подходом
            InGenium глубже или выбрать образовательную программу для системного
            обучения.
          </p>

          <div className={css.actions}>
            <Link href="/education" className={css.primary}>
              Выбрать обучение
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/articles" className={css.secondary}>
              Читать статьи
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

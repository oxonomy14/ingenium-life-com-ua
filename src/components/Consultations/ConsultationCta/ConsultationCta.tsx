import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './ConsultationCta.module.css';

export default function ConsultationCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.card}>
          <div className={css.content}>
            <p className={css.eyebrow}>Запись на консультацию</p>

            <h2 className={css.title}>
              Не уверены, какой формат вам подходит?
            </h2>

            <p className={css.description}>
              Опишите свой вопрос или ситуацию. Мы поможем определить, какой
              формат консультации лучше подходит под ваш запрос.
            </p>
          </div>

          <Link href="/contacts" className={css.button}>
            Записаться на консультацию
          </Link>
        </div>
      </Container>
    </section>
  );
}

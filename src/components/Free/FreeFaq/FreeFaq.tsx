// src/components/FreeFaq/FreeFaq.tsx

import Container from '@/components/Container/Container';

import { freeFaq } from '@/data/freeFaq';

import css from './FreeFaq.module.css';

export default function FreeFaq() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.header}>
            <span className={css.eyebrow}>FAQ</span>

            <h2 className={css.title}>Частые вопросы</h2>

            <p className={css.description}>
              Всё, что нужно знать о бесплатных занятиях и просмотре видео.
            </p>
          </div>

          <div className={css.list}>
            {freeFaq.map((item) => (
              <details key={item.question} className={css.item}>
                <summary className={css.question}>
                  <span>{item.question}</span>

                  <span className={css.icon} aria-hidden="true">
                    +
                  </span>
                </summary>

                <div className={css.answer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

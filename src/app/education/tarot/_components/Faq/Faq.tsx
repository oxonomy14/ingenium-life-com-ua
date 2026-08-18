// src/app/education/tarot/_components/Faq/Faq.tsx

import Container from '@/components/Container/Container';

import { tarotFaqItems } from '../../_data/faq';

import css from './Faq.module.css';

export default function Faq() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.header}>
            <p className={css.eyebrow}>Вопросы и ответы</p>

            <h2 className={css.title}>Частые вопросы об обучении Таро</h2>

            <p className={css.description}>
              Если вы только выбираете программу, здесь собраны ответы на
              основные вопросы о формате обучения, уровне подготовки и подходе к
              изучению Таро.
            </p>
          </div>

          <div className={css.list}>
            {tarotFaqItems.map((item) => (
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

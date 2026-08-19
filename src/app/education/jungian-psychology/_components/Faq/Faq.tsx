// src/app/education/jungian-psychology/_components/Faq/Faq.tsx

import Container from '@/components/Container/Container';

import css from './Faq.module.css';

import { faqItems } from '../../_data/faq';

export default function Faq() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Вопросы и ответы</p>

            <h2 className={css.title}>Частые вопросы об обучении</h2>

            <p className={css.description}>
              Основная информация о программах, уровне подготовки и формате
              изучения юнгианской психологии.
            </p>
          </div>

          <div className={css.list}>
            {faqItems.map((item) => (
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

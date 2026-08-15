import Container from '@/components/Container/Container';

import { educationFaqItems } from './educationFaqData';

import css from './EducationFaq.module.css';

export default function EducationFaq() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Вопросы и ответы</p>

            <h2 className={css.title}>
              Частые вопросы
              <span> об обучении</span>
            </h2>

            <p className={css.description}>
              Здесь собраны ответы на основные вопросы о программах, форматах
              обучения и выборе направления.
            </p>
          </div>

          <div className={css.list}>
            {educationFaqItems.map((item) => (
              <details className={css.item} key={item.question}>
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

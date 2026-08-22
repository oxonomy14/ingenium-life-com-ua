import Container from '@/components/Container/Container';
import { consultationFaqItems } from '@/data/consultations';

import css from './ConsultationFaq.module.css';

export default function ConsultationFaq() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.layout}>
          <div className={css.header}>
            <p className={css.eyebrow}>FAQ</p>

            <h2 className={css.title}>Частые вопросы</h2>

            <p className={css.description}>
              Если вы не уверены, какой формат подойдёт именно вам, опишите свой
              запрос при обращении — формат консультации можно подобрать исходя
              из задачи.
            </p>
          </div>

          <div className={css.list}>
            {consultationFaqItems.map((item) => (
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

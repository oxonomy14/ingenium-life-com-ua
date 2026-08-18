import Container from '@/components/Container/Container';

import css from './AstrologyFaq.module.css';

import { astrologyFaqItems } from '../../_data/astrologyFaq';

export default function AstrologyFaq() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Вопросы и ответы</p>

            <h2 className={css.title}>Частые вопросы об обучении астрологии</h2>

            <p className={css.description}>
              Если вы только выбираете программу, здесь собраны ответы на
              основные вопросы о формате и уровне подготовки.
            </p>
          </div>

          <div className={css.list}>
            {astrologyFaqItems.map((item) => (
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

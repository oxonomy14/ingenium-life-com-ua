// src/app/webinars/_components/Faq/Faq.tsx

import Container from '@/components/Container/Container';

import { faqItems } from '../../_data/faq';

import css from './Faq.module.css';

export default function Faq() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.header}>
            <span className={css.eyebrow}>Частые вопросы</span>

            <h2 className={css.title}>О вебинарах InGenium</h2>

            <p className={css.description}>
              Как устроен доступ к записям, что входит в приобретение и можно ли
              купить вебинар отдельно от подписки.
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

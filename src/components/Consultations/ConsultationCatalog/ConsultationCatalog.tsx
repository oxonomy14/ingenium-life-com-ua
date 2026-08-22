import Link from 'next/link';

import Container from '@/components/Container/Container';
import { convertRubToUah } from '@/lib/currency';
import { consultations } from '@/data/consultations';

import css from './ConsultationCatalog.module.css';

export default function ConsultationCatalog() {
  return (
    <section id="consultations" className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Форматы работы</p>

          <h2 className={css.title}>Выберите подходящий формат консультации</h2>

          <p className={css.description}>
            Формат зависит от глубины запроса: можно разобрать натальную карту
            целиком, сосредоточиться на одной сфере или обсудить конкретный
            вопрос.
          </p>
        </div>

        <div className={css.grid}>
          {consultations.map((consultation) => (
            <article
              key={consultation.title}
              className={`${css.card} ${
                consultation.featured ? css.featured : ''
              }`}
            >
              {consultation.featured && (
                <span className={css.badge}>Основной формат</span>
              )}

              <div className={css.cardTop}>
                <div>
                  <h3 className={css.cardTitle}>{consultation.title}</h3>
                  <span className={css.duration}>{consultation.duration}</span>
                </div>

                <div className={css.price}>
                  {convertRubToUah(consultation.priceRub)} ₴
                </div>
              </div>

              <p className={css.cardDescription}>{consultation.description}</p>

              <ul className={css.topics}>
                {consultation.topics.map((topic) => (
                  <li key={topic} className={css.topic}>
                    {topic}
                  </li>
                ))}
              </ul>

              <div className={css.cardFooter}>
                <Link href="/contacts" className={css.link}>
                  Записаться
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

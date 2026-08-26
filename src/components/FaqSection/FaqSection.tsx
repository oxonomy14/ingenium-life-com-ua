'use client';

import { useState } from 'react';

import Container from '@/components/Container/Container';

import css from './FaqSection.module.css';

import { homeFaqItems } from '@/data/homeFaq';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.header}>
            <p className={css.eyebrow}>Запитання та відповіді</p>

            <h2 className={css.title}>
              Часті
              <span> запитання</span>
            </h2>

            <p className={css.description}>
              Коротко про формат навчання, доступ до матеріалів, вебінари та
              авторський простір InGenium.
            </p>
          </div>

          <div className={css.list}>
            {homeFaqItems.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div className={css.item} key={item.question}>
                  <button
                    type="button"
                    className={css.question}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>

                    <span
                      className={`${css.icon} ${isOpen ? css.iconOpen : ''}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`${css.answerWrapper} ${
                      isOpen ? css.answerOpen : ''
                    }`}
                  >
                    <div className={css.answerInner}>
                      <p className={css.answer}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

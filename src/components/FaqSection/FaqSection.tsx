'use client';

import { useState } from 'react';

import Container from '@/components/Container/Container';

import css from './FaqSection.module.css';

const faqItems = [
  {
    question: 'В каком формате проходит обучение?',
    answer:
      'Программы InGenium проходят онлайн. В зависимости от курса участники получают доступ к занятиям, записям, учебным материалам и дополнительным практическим материалам.',
  },
  {
    question: 'Подойдёт ли обучение начинающим?',
    answer:
      'Да. Для каждой программы мы отдельно указываем необходимый уровень подготовки. Часть курсов рассчитана на тех, кто только начинает изучать тему, а часть — на продолжающих обучение.',
  },
  {
    question: 'Можно ли смотреть занятия в записи?',
    answer:
      'Для программ, где предусмотрена запись занятий, материалы остаются доступными для повторного просмотра. Точные условия доступа указаны на странице конкретного курса.',
  },
  {
    question: 'Есть ли поддержка во время обучения?',
    answer:
      'В зависимости от формата программы участники могут задавать вопросы по материалам и получать обратную связь в процессе обучения.',
  },
  {
    question: 'Чем авторские вебинары отличаются от курсов?',
    answer:
      'Курсы построены как последовательные образовательные программы, а вебинары посвящены отдельным темам и могут выходить за рамки основных направлений обучения.',
  },
  {
    question: 'Что такое Закрытый InGenium?',
    answer:
      'Это отдельное авторское пространство с вебинарами, дополнительными материалами и встречами на темы человека, культуры, мышления и мировоззрения.',
  },
  {
    question: 'Можно ли приобрести отдельный вебинар?',
    answer:
      'Часть вебинаров может быть доступна отдельно. Актуальные варианты доступа и условия указаны на странице конкретного вебинара.',
  },
];

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
            <p className={css.eyebrow}>Вопросы и ответы</p>

            <h2 className={css.title}>
              Часто задаваемые
              <span> вопросы</span>
            </h2>

            <p className={css.description}>
              Коротко о формате обучения, доступе к материалам, вебинарах и
              авторском пространстве InGenium.
            </p>
          </div>

          <div className={css.list}>
            {faqItems.map((item, index) => {
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

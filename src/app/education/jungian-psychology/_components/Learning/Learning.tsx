// src/app/education/jungian-psychology/_components/Learning/Learning.tsx

import Container from '@/components/Container/Container';

import css from './Learning.module.css';

const topics = [
  {
    number: '01',
    title: 'Архетипы',
    description:
      'Универсальные образы и структуры бессознательного, которые проявляются в поведении, отношениях, культуре, мифах и личных историях.',
  },
  {
    number: '02',
    title: 'Тень',
    description:
      'Вытесненные и непризнанные стороны личности, их влияние на внутренние конфликты, реакции и отношения с другими людьми.',
  },
  {
    number: '03',
    title: 'Психологические типы',
    description:
      'Интроверсия и экстраверсия, особенности восприятия мира и различия между типами личности в юнгианской модели.',
  },
  {
    number: '04',
    title: 'Функции сознания',
    description:
      'Мышление, чувство, ощущение и интуиция — четыре функции, через которые человек воспринимает и оценивает происходящее.',
  },
  {
    number: '05',
    title: 'Символы и сновидения',
    description:
      'Исследование символического языка бессознательного и понимание образов, которые появляются в сновидениях и внутренней жизни.',
  },
  {
    number: '06',
    title: 'Комплексы и внутренние конфликты',
    description:
      'Как формируются эмоционально заряженные психические структуры и каким образом они влияют на решения, отношения и жизненные сценарии.',
  },
];

export default function Learning() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Содержание обучения</p>

          <h2 className={css.title}>Что вы будете изучать</h2>

          <p className={css.description}>
            От базовых идей аналитической психологии до понимания глубинных
            процессов, которые формируют личность и влияют на внутреннюю жизнь
            человека.
          </p>
        </div>

        <div className={css.grid}>
          {topics.map((topic) => (
            <article key={topic.number} className={css.card}>
              <span className={css.number}>{topic.number}</span>

              <h3 className={css.cardTitle}>{topic.title}</h3>

              <p className={css.cardDescription}>{topic.description}</p>
            </article>
          ))}
        </div>

        <div className={css.note}>
          <div className={css.noteContent}>
            <p className={css.noteLabel}>Отдельная тема</p>

            <h3 className={css.noteTitle}>Подчинённая функция</h3>

            <p className={css.noteDescription}>
              Особое внимание уделяется наименее не развитой функции психики. Её
              проявления могут становиться источником сложностей, но
              одновременно открывают важное направление для личностного развития
              и более глубокого понимания себя.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

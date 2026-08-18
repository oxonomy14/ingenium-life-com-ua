// src/app/education/tarot/_components/Learning/Learning.tsx

import Container from '@/components/Container/Container';

import css from './Learning.module.css';

const learningItems = [
  {
    number: '01',
    title: 'Последовательная программа',
    description:
      'Обучение движется от устройства системы Таро и символики Арканов к их взаимосвязям, интерпретации и целостному чтению раскладов.',
  },
  {
    number: '02',
    title: 'Занятия в записи',
    description:
      'Большинство программ можно проходить в удобном темпе, возвращаясь к отдельным темам и занятиям по мере необходимости.',
  },
  {
    number: '03',
    title: 'Практика чтения Таро',
    description:
      'Вы учитесь не просто запоминать значения карт, а видеть контекст, связи между Арканами и применять знания при работе с раскладами.',
  },
  {
    number: '04',
    title: 'Дополнительные материалы',
    description:
      'В зависимости от программы доступны методические материалы, схемы, примеры раскладов и дополнительные материалы к занятиям.',
  },
];

export default function Learning() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Формат обучения</p>

          <h2 className={css.title}>Как проходит обучение Таро</h2>

          <p className={css.description}>
            Курсы построены так, чтобы постепенно перейти от понимания структуры
            и символического языка Таро к самостоятельной интерпретации карт и
            целостному чтению раскладов.
          </p>
        </div>

        <div className={css.grid}>
          {learningItems.map((item) => (
            <article key={item.number} className={css.card}>
              <span className={css.number}>{item.number}</span>

              <h3 className={css.cardTitle}>{item.title}</h3>

              <p className={css.cardDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

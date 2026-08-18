import Container from '@/components/Container/Container';

import css from './AstrologyLearning.module.css';

const learningItems = [
  {
    number: '01',
    title: 'Последовательная программа',
    description:
      'Материал выстроен от базовых принципов к более сложному анализу, синтезу и практической работе.',
  },
  {
    number: '02',
    title: 'Занятия в записи',
    description:
      'Большинство программ можно проходить в удобном темпе и возвращаться к материалам по мере необходимости.',
  },
  {
    number: '03',
    title: 'Практический подход',
    description:
      'В обучении важно не только знать значения, но и уметь применять их при анализе натальной карты.',
  },
  {
    number: '04',
    title: 'Дополнительные материалы',
    description:
      'В зависимости от программы могут быть доступны методические материалы, схемы и дополнительные материалы к занятиям.',
  },
];

export default function AstrologyLearning() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Формат обучения</p>

          <h2 className={css.title}>Как проходит обучение</h2>

          <p className={css.description}>
            Курсы построены так, чтобы можно было постепенно перейти от
            понимания отдельных элементов астрологии к самостоятельной работе с
            картой.
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

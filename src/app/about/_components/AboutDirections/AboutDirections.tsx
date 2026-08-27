// AboutDirections.tsx

import Container from '@/components/Container/Container';

import css from './AboutDirections.module.css';

const directions = [
  {
    number: '01',
    title: 'Астрологія',
    text: 'Астрологія розглядається як цілісна система, у якій окремі елементи набувають сенсу через взаємозв’язки. У центрі уваги — структура особистості, життєві процеси та закономірності розвитку.',
  },
  {
    number: '02',
    title: 'Таро',
    text: 'Таро в InGenium — це передусім символічна мова. Робота з ним будується не навколо заучування готових значень, а навколо образів, контексту та здатності бачити зв’язки між символами.',
  },
  {
    number: '03',
    title: 'Юнгіанська психологія',
    text: 'Психологічний напрям допомагає глибше досліджувати внутрішні процеси людини, архетипічні образи, несвідомі сценарії та способи взаємодії особистості з навколишнім світом.',
  },
];

export default function AboutDirections() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Напрями</p>

          <h2 className={css.title}>
            Різні системи.
            <span> Один погляд на людину.</span>
          </h2>

          <p className={css.description}>
            Кожен напрям можна вивчати окремо, але в InGenium вони об’єднані
            спільною ідеєю — навчитися бачити структуру, взаємозв’язки та
            процеси, що стоять за окремими проявами.
          </p>
        </div>

        <div className={css.grid}>
          {directions.map((direction) => (
            <article className={css.card} key={direction.title}>
              <span className={css.number}>{direction.number}</span>

              <h3 className={css.cardTitle}>{direction.title}</h3>

              <p className={css.cardText}>{direction.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

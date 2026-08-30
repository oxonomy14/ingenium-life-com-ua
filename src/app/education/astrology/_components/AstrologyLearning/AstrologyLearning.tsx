import Container from '@/components/Container/Container';

import css from './AstrologyLearning.module.css';

const learningItems = [
  {
    number: '01',
    title: 'Послідовна програма',
    description:
      'Матеріал побудований від базових принципів до складнішого аналізу, синтезу та практичної роботи.',
  },
  {
    number: '02',
    title: 'Заняття в записі',
    description:
      'Більшість програм можна проходити у зручному темпі та повертатися до матеріалів за потреби.',
  },
  {
    number: '03',
    title: 'Практичний підхід',
    description:
      'У навчанні важливо не лише знати значення, а й уміти застосовувати їх під час аналізу натальної карти.',
  },
  {
    number: '04',
    title: 'Додаткові матеріали',
    description:
      'Залежно від програми можуть бути доступні методичні матеріали, схеми та додаткові матеріали до занять.',
  },
];

export default function AstrologyLearning() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Формат навчання</p>

          <h2 className={css.title}>Як проходить навчання</h2>

          <p className={css.description}>
            Курси побудовані так, щоб можна було поступово перейти від розуміння
            окремих елементів астрології до самостійної роботи з картою.
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

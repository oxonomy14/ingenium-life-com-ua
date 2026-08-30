import Container from '@/components/Container/Container';

import css from './AstrologyAudience.module.css';

const audienceItems = [
  {
    title: 'Тим, хто починає з нуля',
    description:
      'Якщо ви тільки знайомитеся з астрологією, можна почати з базових програм і поступово перейти до аналізу натальної карти.',
  },
  {
    title: 'Тим, хто вже вивчав астрологію',
    description:
      'Курси допомагають систематизувати знання, усунути розрізненість і навчитися поєднувати окремі показники карти в цілісний аналіз.',
  },
  {
    title: 'Тим, хто хоче консультувати',
    description:
      'Програми підійдуть тим, хто хоче розвивати практичні навички аналізу та використовувати астрологію в роботі із запитами клієнтів.',
  },
  {
    title: 'Тим, хто вивчає астрологію для себе',
    description:
      'Отримані знання можна використовувати для глибшого розуміння власної карти, життєвих сценаріїв та індивідуальних особливостей.',
  },
];

export default function AstrologyAudience() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Кому підійде</p>

            <h2 className={css.title}>
              Почати можна з різного рівня підготовки
            </h2>

            <p className={css.description}>
              У каталозі є програми як для першого знайомства з астрологією, так
              і для тих, хто хоче поглибити вже наявні знання та перейти до
              практики.
            </p>
          </div>

          <div className={css.list}>
            {audienceItems.map((item, index) => (
              <article key={item.title} className={css.item}>
                <span className={css.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={css.itemContent}>
                  <h3 className={css.itemTitle}>{item.title}</h3>

                  <p className={css.itemDescription}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

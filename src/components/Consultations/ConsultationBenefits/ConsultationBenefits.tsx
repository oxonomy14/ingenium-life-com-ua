import Container from '@/components/Container/Container';

import css from './ConsultationBenefits.module.css';

const benefits = [
  {
    title: 'Понятный разбор',
    description:
      'Без необходимости разбираться в профессиональной астрологической терминологии. Основные идеи объясняются простым и понятным языком.',
  },
  {
    title: 'Фокус на вашем запросе',
    description:
      'Консультация строится вокруг конкретной ситуации, вопроса или жизненной сферы, которая сейчас для вас действительно важна.',
  },
  {
    title: 'Практические ориентиры',
    description:
      'Разбор не ограничивается описанием натальной карты. Мы рассматриваем возможные стратегии, сильные стороны и варианты дальнейших действий.',
  },
  {
    title: 'Возможность задавать вопросы',
    description:
      'Во время встречи можно уточнять непонятные моменты, возвращаться к важным темам и разбирать дополнительные вопросы по ходу консультации.',
  },
  {
    title: 'Запись консультации',
    description:
      'После встречи вы получаете запись и можете пересмотреть её позже, чтобы спокойно вернуться к отдельным выводам и рекомендациям.',
  },
  {
    title: 'Индивидуальная подготовка',
    description:
      'Перед встречей карта и ваш запрос изучаются заранее, поэтому основное время консультации посвящено содержательному разбору.',
  },
];

export default function ConsultationBenefits() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Результат</p>

          <h2 className={css.title}>Что вы получите от консультации</h2>

          <p className={css.description}>
            Цель консультации — не просто описать показатели натальной карты, а
            помочь увидеть ситуацию целостно и лучше понять возможные варианты
            дальнейших действий.
          </p>
        </div>

        <div className={css.grid}>
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className={css.card}>
              <span className={css.number}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className={css.cardTitle}>{benefit.title}</h3>

              <p className={css.cardDescription}>{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

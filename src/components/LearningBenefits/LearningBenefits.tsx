import Container from '@/components/Container/Container';

import css from './LearningBenefits.module.css';

const benefits = [
  {
    number: '01',
    title: 'Авторские материалы',
    text: 'Методические пособия, таблицы, чек-листы и дополнительные материалы, которые помогают глубже разбирать тему.',
  },
  {
    number: '02',
    title: 'Практика в процессе обучения',
    text: 'Знания закрепляются на примерах, разборах и заданиях, чтобы теория сразу становилась рабочим инструментом.',
  },
  {
    number: '03',
    title: 'Записи занятий',
    text: 'К материалам можно возвращаться в удобное время, пересматривать сложные темы и повторять ключевые моменты.',
  },
  {
    number: '04',
    title: 'Поддержка и обратная связь',
    text: 'В процессе обучения можно задавать вопросы, уточнять материал и получать обратную связь по сложным темам.',
  },
  {
    number: '05',
    title: 'Сообщество',
    text: 'Обучение проходит в среде людей, которым интересны те же темы, подходы и направления исследования.',
  },
  {
    number: '06',
    title: 'Дополнительные встречи',
    text: 'Авторские вебинары и тематические встречи помогают выходить за рамки основной программы и расширять контекст.',
  },
];

export default function LearningBenefits() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Почему InGenium</p>

            <h2 className={css.title}>
              Обучение, в котором
              <span> важен сам процесс</span>
            </h2>
          </div>

          <p className={css.description}>
            Мы создаём программы так, чтобы к материалам можно было
            возвращаться, задавать вопросы и постепенно превращать знания в
            устойчивый навык.
          </p>
        </div>

        <div className={css.grid}>
          {benefits.map((benefit) => (
            <article className={css.item} key={benefit.number}>
              <span className={css.number}>{benefit.number}</span>

              <div>
                <h3 className={css.itemTitle}>{benefit.title}</h3>
                <p className={css.itemText}>{benefit.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

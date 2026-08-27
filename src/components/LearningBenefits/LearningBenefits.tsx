import Container from '@/components/Container/Container';

import css from './LearningBenefits.module.css';

const benefits = [
  {
    number: '01',
    title: 'Авторські матеріали',
    text: 'Методичні посібники, таблиці, чеклісти та додаткові матеріали, які допомагають глибше опрацьовувати тему.',
  },
  {
    number: '02',
    title: 'Практика в процесі навчання',
    text: 'Знання закріплюються на прикладах, розборах і завданнях, щоб теорія одразу ставала практичним інструментом.',
  },
  {
    number: '03',
    title: 'Записи занять',
    text: 'До матеріалів можна повертатися у зручний час, переглядати складні теми повторно та освіжати ключові моменти.',
  },
  {
    number: '04',
    title: 'Підтримка та зворотний зв’язок',
    text: 'У процесі навчання можна ставити запитання, уточнювати матеріал і отримувати зворотний зв’язок щодо складних тем.',
  },
  {
    number: '05',
    title: 'Спільнота',
    text: 'Навчання проходить у середовищі людей, яким цікаві ті самі теми, підходи та напрями дослідження.',
  },
  {
    number: '06',
    title: 'Додаткові зустрічі',
    text: 'Авторські вебінари та тематичні зустрічі допомагають виходити за межі основної програми та розширювати контекст.',
  },
];

export default function LearningBenefits() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Чому InGenium</p>

            <h2 className={css.title}>
              Навчання, у якому
              <span> важливий сам процес</span>
            </h2>
          </div>

          <p className={css.description}>
            Ми створюємо програми так, щоб до матеріалів можна було повертатися,
            ставити запитання та поступово перетворювати знання на стійку
            навичку.
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

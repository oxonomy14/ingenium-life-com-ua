import Container from '@/components/Container/Container';

import css from './AboutApproach.module.css';

const principles = [
  {
    title: 'Не готові трактування, а розуміння системи',
    text: 'Ми розглядаємо не лише значення окремих елементів, а й зв’язки між ними. Це допомагає бачити цілісну картину та самостійно застосовувати знання.',
  },
  {
    title: 'Теорія завжди пов’язана з практикою',
    text: 'Матеріал закріплюється через розбори, приклади та практичні завдання. Мета навчання — навчитися працювати із системою, а не просто знати її термінологію.',
  },
  {
    title: 'Розвиток самостійного мислення',
    text: 'Ми не прагнемо дати універсальний набір відповідей на всі випадки. Для нас важливіше навчити аналізувати, порівнювати, ставити запитання та формувати власні висновки.',
  },
  {
    title: 'Глибина замість швидкості',
    text: 'Складні системи потребують часу. Тому навчання будується послідовно: від базових принципів до глибшого розуміння та впевненої самостійної практики.',
  },
];

export default function AboutApproach() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Підхід до навчання</p>

          <h2 className={css.title}>
            Знання мають ставати
            <span> інструментом мислення</span>
          </h2>

          <p className={css.description}>
            В InGenium важлива не кількість вивчених значень і технік, а
            здатність бачити закономірності, розуміти контекст і самостійно
            працювати з матеріалом.
          </p>
        </div>

        <div className={css.grid}>
          {principles.map((principle, index) => (
            <article className={css.card} key={principle.title}>
              <span className={css.number}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className={css.cardTitle}>{principle.title}</h3>

              <p className={css.cardText}>{principle.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

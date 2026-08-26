import Container from '@/components/Container/Container';

import css from './PracticeLearning.module.css';

const principles = [
  {
    number: '01',
    title: 'Розуміння замість заучування',
    text: 'Ви вивчаєте не набір готових трактувань, а вчитеся розуміти принципи, взаємозв’язки та логіку системи.',
  },
  {
    number: '02',
    title: 'Практика з перших занять',
    text: 'Теорія доповнюється прикладами, розборами та завданнями, які допомагають одразу застосовувати здобуті знання.',
  },
  {
    number: '03',
    title: 'Навичка самостійного аналізу',
    text: 'Головна мета навчання — навчитися самостійно працювати з матеріалом і впевнено застосовувати знання на практиці.',
  },
];

export default function PracticeLearning() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Практичне навчання</p>

            <h2 className={css.title}>
              Знання, які
              <span> стають практикою</span>
            </h2>

            <p className={css.description}>
              В основі навчання InGenium — авторські методики, практичні
              приклади та робота з реальними ситуаціями. Ви не просто вивчаєте
              теорію, а вчитеся бачити взаємозв’язки, аналізувати та
              застосовувати здобуті знання на практиці.
            </p>
          </div>

          <div className={css.principles}>
            {principles.map((item) => (
              <article className={css.principle} key={item.number}>
                <span className={css.number}>{item.number}</span>

                <div className={css.principleContent}>
                  <h3 className={css.principleTitle}>{item.title}</h3>

                  <p className={css.principleText}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

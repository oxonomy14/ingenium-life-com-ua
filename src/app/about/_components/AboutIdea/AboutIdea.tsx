import Container from '@/components/Container/Container';

import css from './AboutIdea.module.css';

export default function AboutIdea() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.intro}>
            <p className={css.eyebrow}>Ідея проєкту</p>

            <div className={css.word}>
              <span className={css.wordMain}>InGenium</span>
              <span className={css.wordOrigin}>від лат. ingenium</span>
            </div>

            <p className={css.meaning}>
              природний дар · здібність · талант · внутрішній потенціал
            </p>
          </div>

          <div className={css.content}>
            <h2 className={css.title}>
              Допомагати бачити глибше за окремі факти та готові відповіді
            </h2>

            <div className={css.text}>
              <p>
                В основі InGenium лежить ідея про те, що людина значно глибша за
                сукупність окремих якостей, реакцій і життєвих обставин.
              </p>

              <p>
                Кожен має власну внутрішню структуру, здібності та способи
                взаємодії зі світом — і все це можна досліджувати, розуміти та
                розвивати.
              </p>

              <p>
                Астрологія, Таро та психологія розглядаються в InGenium не як
                набір готових відповідей, а як системи знань і символічні мови,
                що допомагають бачити взаємозв’язки, краще розуміти себе та
                усвідомленіше приймати рішення.
              </p>

              <p>
                Тому наше завдання — не просто передавати інформацію, а навчати
                бачити систему, ставити запитання, аналізувати та поступово
                формувати власне розуміння.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

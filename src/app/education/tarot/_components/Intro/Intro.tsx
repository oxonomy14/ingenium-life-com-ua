// src/app/education/tarot/_components/Intro/Intro.tsx

import Container from '@/components/Container/Container';

import css from './Intro.module.css';

export default function Intro() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Изучение Таро</p>

            <h2 className={css.title}>
              Таро — это больше,
              <span> чем значения отдельных карт</span>
            </h2>
          </div>

          <div className={css.content}>
            <p className={css.lead}>
              В InGenium Таро изучается как целостная система символов,
              архетипов и взаимосвязей, которая позволяет глубже понимать смысл
              карты и видеть её значение в контексте конкретной ситуации.
            </p>

            <p className={css.text}>
              Вместо механического заучивания трактовок мы исследуем структуру
              колоды, Старшие и Младшие Арканы, символику изображений и разные
              традиции Таро. Такой подход помогает понимать принципы системы и
              увереннее работать с различными колодами.
            </p>

            <p className={css.text}>
              Теория сразу соединяется с практикой: вы учитесь формулировать
              вопросы, видеть связи между картами и постепенно переходите от
              чтения отдельных Арканов к интерпретации целого расклада.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

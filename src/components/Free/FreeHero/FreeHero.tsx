import Container from '@/components/Container/Container';

import css from './FreeHero.module.css';

export default function FreeHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <span className={css.eyebrow}>Открытые материалы InGenium</span>

            <h1 className={css.title}>
              Бесплатные уроки по астрологии, Таро и психологии
            </h1>

            <p className={css.description}>
              Открытые занятия из образовательных программ InGenium.
              Познакомьтесь с подходом к обучению, посмотрите отдельные уроки и
              выберите направление для дальнейшего изучения.
            </p>

            <a href="#free-lessons" className={css.button}>
              Смотреть уроки
            </a>
          </div>

          <div className={css.visual} aria-hidden="true">
            <div className={css.visualCard}>
              <div className={css.play}>
                <span />
              </div>

              <p className={css.visualTitle}>Учитесь в удобном темпе</p>

              <p className={css.visualText}>
                Смотрите занятия в свободном доступе
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

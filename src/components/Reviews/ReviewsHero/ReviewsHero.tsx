import Container from '@/components/Container/Container';

import css from './ReviewsHero.module.css';

export default function ReviewsHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <span className={css.eyebrow}>Отзывы учеников</span>

          <h1 className={css.title}>Отзывы об обучении в InGenium</h1>

          <p className={css.description}>
            Опыт учеников и выпускников, которые проходили курсы, вебинары и
            образовательные программы InGenium.
          </p>
        </div>
      </Container>
    </section>
  );
}

import { reviews } from '@/data/reviews';

import Container from '@/components/Container/Container';

import css from './ReviewsList.module.css';

export default function ReviewsList() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <span className={css.eyebrow}>Опыт участников</span>

            <h2 className={css.title}>Об обучении словами учеников</h2>
          </div>

          <p className={css.intro}>
            Здесь собраны отзывы людей, которые изучали астрологию и другие
            направления в образовательных программах InGenium.
          </p>
        </div>

        <div className={css.grid}>
          {reviews.map((review) => (
            <article key={review.id} className={css.card}>
              <span className={css.quote} aria-hidden="true">
                “
              </span>

              <blockquote className={css.text}>{review.text}</blockquote>

              <footer className={css.footer}>
                <strong className={css.name}>{review.name}</strong>

                <span className={css.course}>{review.course}</span>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

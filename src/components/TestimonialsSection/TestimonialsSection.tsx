import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './TestimonialsSection.module.css';

const testimonials = [
  {
    text: 'Обучение помогло мне перестать воспринимать материал как набор отдельных трактовок. Появилась система, понимание взаимосвязей и уверенность в самостоятельной работе.',
    name: 'Анна',
    course: 'Живая Астрология',
  },
  {
    text: 'Особенно ценным для меня оказался практический подход. На занятиях много примеров и разборов, поэтому знания постепенно становятся инструментом, которым действительно умеешь пользоваться.',
    name: 'Марина',
    course: 'Курс по астрологии',
  },
  {
    text: 'Мне понравилось, что здесь не предлагают просто запоминать готовые значения. Нужно думать, анализировать и постепенно формировать собственное понимание материала.',
    name: 'Ольга',
    course: 'Обучение в InGenium',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Отзывы учеников</p>

            <h2 className={css.title}>
              Об обучении
              <span> словами участников</span>
            </h2>
          </div>

          <p className={css.description}>
            Опыт тех, кто уже проходил программы InGenium и применяет полученные
            знания на практике.
          </p>
        </div>

        <div className={css.grid}>
          {testimonials.map((testimonial) => (
            <article
              className={css.card}
              key={`${testimonial.name}-${testimonial.course}`}
            >
              <span className={css.quote} aria-hidden="true">
                “
              </span>

              <blockquote className={css.text}>{testimonial.text}</blockquote>

              <div className={css.author}>
                <p className={css.name}>{testimonial.name}</p>
                <p className={css.course}>{testimonial.course}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={css.footer}>
          <Link href="/reviews" className={css.link}>
            Читать все отзывы
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

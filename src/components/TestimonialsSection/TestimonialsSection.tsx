import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './TestimonialsSection.module.css';

const testimonials = [
  {
    text: 'Навчання допомогло мені перестати сприймати матеріал як набір окремих трактувань. З’явилися система, розуміння взаємозв’язків і впевненість у самостійній роботі.',
    name: 'Анна',
    course: 'Жива Астрологія',
  },
  {
    text: 'Особливо цінним для мене виявився практичний підхід. На заняттях багато прикладів і розборів, тому знання поступово стають інструментом, яким справді вмієш користуватися.',
    name: 'Марина',
    course: 'Курс з астрології',
  },
  {
    text: 'Мені сподобалося, що тут не пропонують просто запам’ятовувати готові значення. Потрібно думати, аналізувати й поступово формувати власне розуміння матеріалу.',
    name: 'Ольга',
    course: 'Навчання в InGenium',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Відгуки учнів</p>

            <h2 className={css.title}>
              Про навчання
              <span> словами учасників</span>
            </h2>
          </div>

          <p className={css.description}>
            Досвід тих, хто вже пройшов програми InGenium і застосовує здобуті
            знання на практиці.
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
            Читати всі відгуки
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

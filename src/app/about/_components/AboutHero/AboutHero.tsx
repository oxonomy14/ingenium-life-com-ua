import Container from '@/components/Container/Container';

import css from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <p className={css.eyebrow}>Про проєкт</p>

          <h1 className={css.title}>
            InGenium Life —<span> простір для глибокого розуміння людини</span>
          </h1>

          <p className={css.description}>
            Авторський освітній проєкт про астрологію, Таро, психологію та інші
            системи, які допомагають досліджувати особистість, життєві процеси
            та внутрішній світ людини.
          </p>
        </div>
      </Container>
    </section>
  );
}

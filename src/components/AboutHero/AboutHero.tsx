import Container from '@/components/Container/Container';

import css from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <p className={css.eyebrow}>О проекте</p>

          <h1 className={css.title}>
            InGenium Life —
            <span> пространство для глубокого понимания человека</span>
          </h1>

          <p className={css.description}>
            Авторский образовательный проект об астрологии, Таро, психологии и
            других системах, которые помогают исследовать личность, жизненные
            процессы и внутренний мир человека.
          </p>
        </div>
      </Container>
    </section>
  );
}

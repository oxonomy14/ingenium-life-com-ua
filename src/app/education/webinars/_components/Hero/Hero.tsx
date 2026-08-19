// src/app/webinars/_components/Hero/Hero.tsx

import Container from '@/components/Container/Container';

import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.content}>
          <span className={css.eyebrow}>Вебинары InGenium</span>

          <h1 className={css.title}>Авторские вебинары Павла Дементьева</h1>

          <p className={css.description}>
            Записи вебинаров по астрологии, Таро, юнгианской психологии,
            личности и самопознанию, которые проходили в рамках закрытого канала
            InGenium.
          </p>
        </div>
      </Container>
    </section>
  );
}

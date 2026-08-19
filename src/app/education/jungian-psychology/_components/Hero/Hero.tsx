// src/app/education/jungian-psychology/_components/Hero/Hero.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Юнгианская психология</p>

            <h1 className={css.title}>Обучение юнгианской психологии</h1>

            <p className={css.description}>
              Изучайте аналитическую психологию Карла Густава Юнга и глубинные
              процессы психики — архетипы, Тень, психологические типы, функции
              сознания, символы и сновидения.
            </p>

            <div className={css.actions}>
              <Link href="#courses" className={css.primaryButton}>
                Смотреть программы
              </Link>

              <Link href="#about" className={css.secondaryButton}>
                Об обучении
              </Link>
            </div>
          </div>

          <div className={css.visual} aria-hidden="true">
            <div className={css.visualCard}>
              <span className={css.symbol}>Ψ</span>

              <div className={css.visualText}>
                <span>Сознательное</span>
                <span>Бессознательное</span>
                <span>Индивидуация</span>
              </div>
            </div>

            <div className={css.circleOne} />
            <div className={css.circleTwo} />
          </div>
        </div>
      </Container>
    </section>
  );
}

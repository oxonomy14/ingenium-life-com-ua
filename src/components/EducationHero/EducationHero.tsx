import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './EducationHero.module.css';

export default function EducationHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Обучение в InGenium</p>

            <h1 className={css.title}>
              Курсы для глубокого изучения
              <span> астрологии, Таро и психологии</span>
            </h1>

            <p className={css.description}>
              Системное обучение для тех, кто хочет не просто получить набор
              знаний, а научиться видеть связи, понимать принципы и применять
              изученное на практике.
            </p>

            <div className={css.actions}>
              <Link href="#directions" className={css.primaryButton}>
                Выбрать направление
              </Link>

              <Link href="/education/webinars" className={css.secondaryButton}>
                Смотреть вебинары
              </Link>
            </div>
          </div>

          <div className={css.visual} aria-hidden="true">
            <div className={css.circleOuter}>
              <div className={css.circleMiddle}>
                <div className={css.circleInner}>
                  <span>In</span>
                </div>
              </div>
            </div>

            <span className={`${css.symbol} ${css.symbolOne}`}>✦</span>
            <span className={`${css.symbol} ${css.symbolTwo}`}>☽</span>
            <span className={`${css.symbol} ${css.symbolThree}`}>△</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

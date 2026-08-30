import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AstrologyHero.module.css';

export default function AstrologyHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Навчання InGenium</p>

            <h1 className={css.title}>
              Курси астрології
              <span>від основ до практики</span>
            </h1>

            <p className={css.description}>
              Системне навчання астрології для початківців і тих, хто продовжує
              навчання. Вивчайте натальну карту, подієвий аналіз, прогностику та
              практичні методи роботи з астрологією.
            </p>

            <div className={css.actions}>
              <Link href="#astrology-courses" className={css.primaryButton}>
                Переглянути курси
              </Link>

              <Link href="/about" className={css.secondaryButton}>
                Про InGenium
              </Link>
            </div>
          </div>

          <div className={css.aside}>
            <p className={css.asideLabel}>Підхід InGenium</p>

            <p className={css.asideText}>
              Не набір готових трактувань, а розуміння принципів, взаємозв’язків
              і логіки астрологічної системи.
            </p>

            <div className={css.points}>
              <div className={css.point}>
                <span className={css.number}>01</span>

                <span>Системне розуміння</span>
              </div>

              <div className={css.point}>
                <span className={css.number}>02</span>

                <span>Практичний аналіз</span>
              </div>

              <div className={css.point}>
                <span className={css.number}>03</span>

                <span>Робота з реальними картами</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

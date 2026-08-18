import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AstrologyHero.module.css';

export default function AstrologyHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Обучение InGenium</p>

            <h1 className={css.title}>
              Курсы по астрологии
              <span>от основ до практики</span>
            </h1>

            <p className={css.description}>
              Системное обучение астрологии для начинающих и продолжающих.
              Изучайте натальную карту, событийный анализ, прогностику и
              практические методы работы с астрологией.
            </p>

            <div className={css.actions}>
              <Link href="#astrology-courses" className={css.primaryButton}>
                Смотреть курсы
              </Link>

              <Link href="/about" className={css.secondaryButton}>
                Об InGenium
              </Link>
            </div>
          </div>

          <div className={css.aside}>
            <p className={css.asideLabel}>Подход InGenium</p>

            <p className={css.asideText}>
              Не набор готовых трактовок, а понимание принципов, взаимосвязей и
              логики астрологической системы.
            </p>

            <div className={css.points}>
              <div className={css.point}>
                <span className={css.number}>01</span>

                <span>Системное понимание</span>
              </div>

              <div className={css.point}>
                <span className={css.number}>02</span>

                <span>Практический анализ</span>
              </div>

              <div className={css.point}>
                <span className={css.number}>03</span>

                <span>Работа с реальными картами</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

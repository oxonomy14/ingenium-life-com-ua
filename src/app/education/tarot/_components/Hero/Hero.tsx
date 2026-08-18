// src/app/education/tarot/_components/Hero/Hero.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Обучение InGenium</p>

            <h1 className={css.title}>
              Курсы по Таро
              <span>от символа к целостному чтению</span>
            </h1>

            <p className={css.description}>
              Системное обучение Таро для начинающих и практикующих. Изучайте
              структуру колоды, символику и архетипы Арканов, осваивайте разные
              традиции Таро и учитесь читать карты в контексте реальных вопросов
              и ситуаций.
            </p>

            <div className={css.actions}>
              <Link href="#tarot-courses" className={css.primaryButton}>
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
              Не заучивание готовых значений карт, а понимание символов,
              архетипов и взаимосвязей, из которых складывается целостное чтение
              Таро.
            </p>

            <div className={css.points}>
              <div className={css.point}>
                <span className={css.number}>01</span>
                <span>Символы и архетипы</span>
              </div>

              <div className={css.point}>
                <span className={css.number}>02</span>
                <span>Разные традиции Таро</span>
              </div>

              <div className={css.point}>
                <span className={css.number}>03</span>
                <span>Практика чтения карт</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container/Container';

import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Онлайн-школа InGenium Life</p>

            <h1 className={css.title}>
              Навчання астрології,
              <span> яке стає практикою</span>
            </h1>

            <p className={css.description}>
              Авторські курси Павла Дементьєва для тих, хто хоче глибше розуміти
              астрологію, впевнено працювати з натальною картою та застосовувати
              знання в житті й консультуванні.
            </p>

            <div className={css.actions}>
              <Link href="/education" className={css.primaryButton}>
                Обрати курс
              </Link>

              <Link href="/education/free" className={css.secondaryLink}>
                Спробувати безкоштовно
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className={css.features}>
              <li>Авторська методика</li>
              <li>Практика на реальних картах</li>
              <li>Доступ до записів занять</li>
            </ul>
          </div>

          <div className={css.visual}>
            <div className={css.imageCard}>
              <Image
                src="/images/hero/ingenium-school.webp"
                alt="Навчання у школі астрології InGenium"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 42vw"
                className={css.image}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

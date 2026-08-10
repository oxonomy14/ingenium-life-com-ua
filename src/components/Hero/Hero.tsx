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
              Обучение астрологии,
              <span> которое становится практикой</span>
            </h1>

            <p className={css.description}>
              Авторские курсы Павла Дементьева для тех, кто хочет глубже
              понимать астрологию, уверенно работать с натальной картой и
              применять знания в жизни и консультировании.
            </p>

            <div className={css.actions}>
              <Link href="/education" className={css.primaryButton}>
                Выбрать курс
              </Link>

              <Link href="/education/free" className={css.secondaryLink}>
                Попробовать бесплатно
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className={css.features}>
              <li>Авторская методика</li>
              <li>Практика на реальных картах</li>
              <li>Доступ к записям занятий</li>
            </ul>
          </div>

          <div className={css.visual}>
            <div className={css.imageCard}>
              <Image
                src="/images/hero/ingenium-school.webp"
                alt="Обучение в школе астрологии InGenium"
                fill
                priority
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

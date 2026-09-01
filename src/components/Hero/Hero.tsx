import Link from 'next/link';

import Container from '@/components/Container/Container';

import { getHeroPromoCourse } from '@/lib/courses';

import UpcomingCourse from './UpcomingCourse';

import css from './Hero.module.css';

export default function Hero() {
  const promo = getHeroPromoCourse();

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
                Відкриті уроки для ознайомлення
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className={css.features}>
              <li>Авторська методика</li>
              <li>Практика на реальних картах</li>
              <li>Доступ до записів занять</li>
            </ul>
          </div>

          {promo && (
            <div className={css.visual}>
              <UpcomingCourse course={promo.course} status={promo.status} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

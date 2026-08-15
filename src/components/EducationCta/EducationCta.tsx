import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './EducationCta.module.css';

export default function EducationCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Начните обучение</p>

            <h2 className={css.title}>
              Выберите направление,
              <span> которое интересно вам сейчас</span>
            </h2>

            <p className={css.description}>
              Изучите программы по астрологии, Таро и юнгианской психологии или
              начните с отдельного вебинара.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="/education/astrology" className={css.primaryButton}>
              Астрология
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/education/tarot" className={css.secondaryButton}>
              Таро
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/education/jungian-psychology"
              className={css.secondaryButton}
            >
              Юнгианская психология
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Link href="/education/webinars" className={css.webinarsLink}>
            Или посмотреть отдельные вебинары
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

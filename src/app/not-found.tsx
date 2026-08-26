import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={css.notFound}>
      <Container>
        <div className={css.inner}>
          <div className={css.code} aria-hidden="true">
            404
          </div>

          <p className={css.eyebrow}>Сторінку не знайдено</p>

          <h1 className={css.title}>
            Схоже, такої сторінки
            <span> поки що не існує</span>
          </h1>

          <p className={css.description}>
            Можливо, сторінку було переміщено, адресу змінено або розділ ще
            перебуває в розробці.
          </p>

          <div className={css.actions}>
            <Link href="/" className={css.primaryButton}>
              На головну
            </Link>

            <Link href="/articles" className={css.secondaryButton}>
              Читати статті
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

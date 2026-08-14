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

          <p className={css.eyebrow}>Страница не найдена</p>

          <h1 className={css.title}>
            Кажется, такой страницы
            <span> пока не существует</span>
          </h1>

          <p className={css.description}>
            Возможно, страница была перемещена, адрес изменился или раздел ещё
            находится в разработке.
          </p>

          <div className={css.actions}>
            <Link href="/" className={css.primaryButton}>
              На главную
            </Link>

            <Link href="/articles" className={css.secondaryButton}>
              Читать статьи
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

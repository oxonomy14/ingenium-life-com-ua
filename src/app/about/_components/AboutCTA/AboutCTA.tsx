import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AboutCTA.module.css';

export default function AboutCTA() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <p className={css.eyebrow}>Наступний крок</p>

          <h2 className={css.title}>
            Почніть із того,
            <span> що вам зараз ближче</span>
          </h2>

          <p className={css.description}>
            Можна почати з відкритих матеріалів, глибше познайомитися з підходом
            InGenium або обрати освітню програму для системного навчання.
          </p>

          <div className={css.actions}>
            <Link href="/education" className={css.primary}>
              Обрати навчання
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/articles" className={css.secondary}>
              Читати статті
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

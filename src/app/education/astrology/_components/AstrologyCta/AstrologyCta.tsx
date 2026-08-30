import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AstrologyCta.module.css';

export default function AstrologyCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Почніть навчання</p>

            <h2 className={css.title}>
              Оберіть свій шлях
              <span> у вивченні астрології</span>
            </h2>

            <p className={css.description}>
              Ознайомтеся з програмами InGenium та оберіть курс, що відповідає
              вашому рівню підготовки, інтересам і завданням.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="#astrology-courses" className={css.primaryButton}>
              Переглянути курси
            </Link>

            <Link href="/contacts" className={css.secondaryButton}>
              Поставити запитання
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

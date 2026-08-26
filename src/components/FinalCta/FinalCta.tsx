import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Розпочати навчання</p>

            <h2 className={css.title}>
              Оберіть програму
              <span> та рухайтеся далі</span>
            </h2>

            <p className={css.description}>
              Познайомтеся з напрямами InGenium і знайдіть програму, яка
              відповідає вашому рівню підготовки та інтересам.
            </p>
          </div>

          <div className={css.actions}>
            <Link href="/education" className={css.primaryButton}>
              Переглянути програми
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/articles" className={css.secondaryButton}>
              Читати статті
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

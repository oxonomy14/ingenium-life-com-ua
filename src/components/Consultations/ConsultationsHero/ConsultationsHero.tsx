import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './ConsultationsHero.module.css';

export default function ConsultationsHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.content}>
          <p className={css.eyebrow}>Индивидуальная работа</p>

          <h1 className={css.title}>Консультации по натальной карте</h1>

          <p className={css.description}>
            Индивидуальный разбор вашей ситуации с помощью астрологии — от
            комплексного анализа натальной карты до работы с конкретным
            вопросом, жизненной сферой или текущей задачей.
          </p>

          <div className={css.actions}>
            <Link href="#consultations" className={css.primaryButton}>
              Выбрать формат
            </Link>

            <Link href="#how-it-works" className={css.secondaryButton}>
              Как проходит консультация
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

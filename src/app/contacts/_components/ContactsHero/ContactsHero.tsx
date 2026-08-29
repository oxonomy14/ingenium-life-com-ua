// src/components/ContactsHero/ContactsHero.tsx

import Container from '@/components/Container/Container';

import css from './ContactsHero.module.css';

export default function ContactsHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.content}>
          <p className={css.eyebrow}>Контакти</p>

          <h1 className={css.title}>
            Будемо раді
            <span> вашому повідомленню</span>
          </h1>

          <p className={css.description}>
            Напишіть нам з питань навчання, консультацій, вебінарів або участі в
            проєктах InGenium Life.
          </p>
        </div>
      </Container>
    </section>
  );
}

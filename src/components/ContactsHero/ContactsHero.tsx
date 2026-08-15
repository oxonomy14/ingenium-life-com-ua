// src/components/ContactsHero/ContactsHero.tsx

import Container from '@/components/Container/Container';

import css from './ContactsHero.module.css';

export default function ContactsHero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.content}>
          <p className={css.eyebrow}>Контакты</p>

          <h1 className={css.title}>
            Будем рады
            <span> вашему сообщению</span>
          </h1>

          <p className={css.description}>
            Напишите нам по вопросам обучения, консультаций, вебинаров или
            участия в проектах InGenium Life.
          </p>
        </div>
      </Container>
    </section>
  );
}

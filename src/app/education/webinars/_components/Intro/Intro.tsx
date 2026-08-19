// src/app/webinars/_components/Intro/Intro.tsx

import Container from '@/components/Container/Container';

import css from './Intro.module.css';

export default function Intro() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.content}>
          <span className={css.eyebrow}>Архив вебинаров</span>

          <h2 className={css.title}>
            Отдельные темы, к которым можно возвращаться
          </h2>

          <div className={css.text}>
            <p>
              Эти вебинары проводились Павлом Дементьевым для участников
              закрытого подписного канала InGenium.
            </p>

            <p>
              Сейчас отдельные записи доступны для приобретения независимо от
              подписки. Вы можете выбрать интересующую тему и получить доступ к
              вебинару в записи.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

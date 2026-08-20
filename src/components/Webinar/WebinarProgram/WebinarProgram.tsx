// src/components/Webinar/WebinarProgram/WebinarProgram.tsx

import type { Webinar } from '@/types/webinar';

import Container from '@/components/Container/Container';

import css from './WebinarProgram.module.css';

type WebinarProgramProps = {
  webinar: Webinar;
};

export default function WebinarProgram({ webinar }: WebinarProgramProps) {
  if (!webinar.program || webinar.program.length === 0) {
    return null;
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <span className={css.eyebrow}>Содержание</span>

          <h2 className={css.title}>Программа вебинара</h2>

          <p className={css.description}>
            Основные темы, которые последовательно разбираются в записи
            вебинара.
          </p>
        </div>

        <ol className={css.list}>
          {webinar.program.map((item, index) => (
            <li key={`${item.title}-${index}`} className={css.item}>
              <span className={css.number}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className={css.content}>
                <h3 className={css.itemTitle}>{item.title}</h3>

                {item.description && (
                  <p className={css.itemDescription}>{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

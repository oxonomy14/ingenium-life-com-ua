import Image from 'next/image';

import Container from '@/components/Container/Container';

import css from './WebinarAuthor.module.css';

export default function WebinarAuthor() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.card}>
          <div className={css.imageWrapper}>
            <Image
              src="/images/author/pavel-dementiev.webp"
              alt="Павел Дементьев — автор проекта InGenium"
              fill
              sizes="(max-width: 767px) 100vw, 360px"
              className={css.image}
            />
          </div>

          <div className={css.content}>
            <span className={css.eyebrow}>Автор вебинара</span>

            <h2 className={css.title}>Павел Дементьев</h2>

            <p className={css.description}>
              Основатель проекта InGenium, автор образовательных программ по
              астрологии, Таро и юнгианской психологии.
            </p>

            <p className={css.description}>
              В своих вебинарах Павел соединяет теорию, символический подход и
              практическую работу с конкретной темой.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from 'next/image';

import Container from '@/components/Container/Container';

import css from './AboutAuthor.module.css';

export default function AboutAuthor() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.imageWrapper}>
            <Image
              src="/images/about/pavel-dementiev.webp"
              alt="Павел Дементьев — автор проекта InGenium Life"
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className={css.image}
            />
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор проекта</p>

            <h2 className={css.title}>Павел Дементьев</h2>

            <p className={css.lead}>
              Автор InGenium Life, преподаватель и исследователь астрологии,
              Таро, психологии и систем самопознания.
            </p>

            <div className={css.text}>
              <p>
                InGenium создавался как пространство, где разные системы знания
                можно рассматривать не изолированно, а во взаимосвязи — через
                астрологию, символы, психологию, мифологию и наблюдение за
                реальными жизненными процессами.
              </p>

              <p>
                В основе подхода — не запоминание готовых трактовок, а понимание
                принципов и структуры. Важно не просто знать значение отдельного
                символа или показателя, а видеть, как он работает в контексте
                целого.
              </p>

              <p>
                Обучение в InGenium строится вокруг развития самостоятельного
                мышления, способности анализировать материал и постепенно
                формировать собственное глубокое понимание изучаемых систем.
              </p>
            </div>

            <div className={css.facts}>
              <div className={css.fact}>
                <span className={css.factValue}>Астрология</span>
                <span className={css.factLabel}>
                  системный анализ и практика
                </span>
              </div>

              <div className={css.fact}>
                <span className={css.factValue}>Таро</span>
                <span className={css.factLabel}>
                  символический язык и интерпретация
                </span>
              </div>

              <div className={css.fact}>
                <span className={css.factValue}>Психология</span>
                <span className={css.factLabel}>
                  исследование личности и внутренних процессов
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

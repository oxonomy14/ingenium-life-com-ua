// src/app/education/jungian-psychology/_components/Intro/Intro.tsx

import Container from '@/components/Container/Container';

import css from './Intro.module.css';

export default function Intro() {
  return (
    <section id="about" className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>О направлении</p>

            <h2 className={css.title}>
              Психология, которая исследует глубинные процессы
            </h2>
          </div>

          <div className={css.content}>
            <p>
              Юнгианская психология рассматривает человека не только через
              сознательные решения и поведение, но и через процессы
              бессознательного.
            </p>

            <p>
              Архетипы, Тень, психологические комплексы, символы и сновидения
              помогают увидеть внутренние механизмы, которые влияют на
              отношения, выбор, жизненные сценарии и личностное развитие.
            </p>

            <p>
              Обучение в InGenium соединяет идеи аналитической психологии с
              практическими инструментами исследования личности и помогает
              постепенно формировать целостное понимание внутреннего мира
              человека.
            </p>
          </div>
        </div>

        <div className={css.features}>
          <article className={css.feature}>
            <span className={css.number}>01</span>

            <h3>Понимание личности</h3>

            <p>
              Изучение структуры психики, психологических типов, функций
              сознания и индивидуальных особенностей человека.
            </p>
          </article>

          <article className={css.feature}>
            <span className={css.number}>02</span>

            <h3>Работа с бессознательным</h3>

            <p>
              Исследование архетипов, Тени, комплексов, символических образов и
              процессов, которые находятся за пределами сознательного контроля.
            </p>
          </article>

          <article className={css.feature}>
            <span className={css.number}>03</span>

            <h3>Практическое применение</h3>

            <p>
              Использование юнгианского подхода для самопознания, анализа
              отношений, внутренних конфликтов и жизненных ситуаций.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

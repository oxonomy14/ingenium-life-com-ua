// AboutDirections.tsx

import Container from '@/components/Container/Container';

import css from './AboutDirections.module.css';

const directions = [
  {
    number: '01',
    title: 'Астрология',
    text: 'Астрология рассматривается как целостная система, в которой отдельные элементы обретают смысл через взаимосвязи. В центре внимания — структура личности, жизненные процессы и закономерности развития.',
  },
  {
    number: '02',
    title: 'Таро',
    text: 'Таро в InGenium — это прежде всего символический язык. Работа с ним строится не вокруг заучивания готовых значений, а вокруг образов, контекста и способности видеть связи между символами.',
  },
  {
    number: '03',
    title: 'Юнгианская психология',
    text: 'Психологическое направление помогает глубже исследовать внутренние процессы человека, архетипические образы, бессознательные сценарии и способы взаимодействия личности с окружающим миром.',
  },
];

export default function AboutDirections() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Направления</p>

          <h2 className={css.title}>
            Разные системы.
            <span> Один взгляд на человека.</span>
          </h2>

          <p className={css.description}>
            Каждое направление можно изучать самостоятельно, но внутри InGenium
            они объединены общей идеей — учиться видеть структуру, связи и
            процессы, которые стоят за отдельными проявлениями.
          </p>
        </div>

        <div className={css.grid}>
          {directions.map((direction) => (
            <article className={css.card} key={direction.title}>
              <span className={css.number}>{direction.number}</span>

              <h3 className={css.cardTitle}>{direction.title}</h3>

              <p className={css.cardText}>{direction.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

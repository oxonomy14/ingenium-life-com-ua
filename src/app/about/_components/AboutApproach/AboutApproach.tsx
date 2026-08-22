import Container from '@/components/Container/Container';

import css from './AboutApproach.module.css';

const principles = [
  {
    title: 'Не готовые трактовки, а понимание системы',
    text: 'Мы разбираем не только значения отдельных элементов, но и связи между ними. Это помогает видеть целостную картину и применять знания самостоятельно.',
  },
  {
    title: 'Теория всегда связана с практикой',
    text: 'Материал закрепляется через разборы, примеры и практические задания. Задача обучения — научиться работать с системой, а не просто знать её терминологию.',
  },
  {
    title: 'Развитие собственного мышления',
    text: 'Мы не стремимся дать универсальный набор ответов на все случаи. Нам важнее научить анализировать, сравнивать, задавать вопросы и формировать собственные выводы.',
  },
  {
    title: 'Глубина вместо скорости',
    text: 'Сложные системы требуют времени. Поэтому обучение строится последовательно: от базовых принципов к более глубокому пониманию и уверенной самостоятельной практике.',
  },
];

export default function AboutApproach() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Подход к обучению</p>

          <h2 className={css.title}>
            Знания должны становиться
            <span> инструментом мышления</span>
          </h2>

          <p className={css.description}>
            В InGenium важно не количество изученных значений и техник, а
            способность видеть закономерности, понимать контекст и
            самостоятельно работать с материалом.
          </p>
        </div>

        <div className={css.grid}>
          {principles.map((principle, index) => (
            <article className={css.card} key={principle.title}>
              <span className={css.number}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className={css.cardTitle}>{principle.title}</h3>

              <p className={css.cardText}>{principle.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

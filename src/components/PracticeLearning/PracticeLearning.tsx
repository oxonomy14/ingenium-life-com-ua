import Container from '@/components/Container/Container';

import css from './PracticeLearning.module.css';

const principles = [
  {
    number: '01',
    title: 'Понимание вместо заучивания',
    text: 'Вы изучаете не набор готовых трактовок, а учитесь понимать принципы, связи и логику системы.',
  },
  {
    number: '02',
    title: 'Практика с первых занятий',
    text: 'Теория подкрепляется примерами, разборами и заданиями, которые помогают сразу применять полученные знания.',
  },
  {
    number: '03',
    title: 'Навык самостоятельного анализа',
    text: 'Главная цель обучения — научиться самостоятельно работать с материалом и уверенно использовать знания на практике.',
  },
];

export default function PracticeLearning() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.eyebrow}>Практическое обучение</p>

            <h2 className={css.title}>
              Знания, которые
              <span> становятся практикой</span>
            </h2>

            <p className={css.description}>
              В основе обучения InGenium — авторские методики, практические
              примеры и работа с реальными ситуациями. Вы не просто изучаете
              теорию, а учитесь видеть взаимосвязи, анализировать и применять
              полученные знания на практике.
            </p>
          </div>

          <div className={css.principles}>
            {principles.map((item) => (
              <article className={css.principle} key={item.number}>
                <span className={css.number}>{item.number}</span>

                <div className={css.principleContent}>
                  <h3 className={css.principleTitle}>{item.title}</h3>

                  <p className={css.principleText}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

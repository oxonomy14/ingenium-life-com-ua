import Container from '@/components/Container/Container';

import css from './AboutHistory.module.css';

const stages = [
  {
    period: 'Начало',
    title: 'Формирование подхода',
    text: 'Исследование астрологии, Таро, психологии и символических систем постепенно сформировало собственный подход к обучению — через структуру, взаимосвязи и практическое понимание.',
  },
  {
    period: 'Развитие',
    title: 'Школа и образовательные программы',
    text: 'InGenium развивался как образовательный проект с курсами, практическими занятиями и программами для тех, кто хотел изучать системы глубже готовых трактовок.',
  },
  {
    period: 'Сегодня',
    title: 'InGenium Life',
    text: 'Сегодня проект объединяет обучение, статьи, консультации, вебинары и авторские материалы, сохраняя главный принцип — помогать человеку видеть систему и мыслить самостоятельно.',
  },
];

export default function AboutHistory() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.header}>
            <p className={css.eyebrow}>История проекта</p>

            <h2 className={css.title}>
              От школы к пространству
              <span> знаний и исследований</span>
            </h2>

            <p className={css.description}>
              InGenium развивался вместе с темами, которые становились частью
              проекта. Со временем образовательные программы вышли за рамки
              отдельных дисциплин и объединились в более широкое пространство
              для исследования человека.
            </p>
          </div>

          <div className={css.timeline}>
            {stages.map((stage, index) => (
              <article className={css.stage} key={stage.title}>
                <div className={css.marker}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className={css.stageContent}>
                  <p className={css.period}>{stage.period}</p>

                  <h3 className={css.stageTitle}>{stage.title}</h3>

                  <p className={css.stageText}>{stage.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

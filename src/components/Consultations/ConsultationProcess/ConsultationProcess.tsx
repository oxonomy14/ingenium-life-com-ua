import Container from '@/components/Container/Container';

import css from './ConsultationProcess.module.css';

const steps = [
  {
    number: '01',
    title: 'Вы оставляете запрос',
    description:
      'При записи указываете дату, место и время рождения, если оно известно, а также коротко описываете вопрос или тему консультации.',
  },
  {
    number: '02',
    title: 'Подготовка к встрече',
    description:
      'Перед консультацией я изучаю натальную карту и заранее отмечаю ключевые показатели, связанные с вашим запросом.',
  },
  {
    number: '03',
    title: 'Онлайн-консультация',
    description:
      'Встречаемся онлайн и подробно разбираем карту, ситуацию и возможные варианты действий. Можно задавать вопросы по ходу консультации.',
  },
  {
    number: '04',
    title: 'Запись и материалы',
    description:
      'После встречи вы получаете запись консультации и можете вернуться к разбору позже, когда понадобится пересмотреть отдельные моменты.',
  },
];

export default function ConsultationProcess() {
  return (
    <section id="how-it-works" className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Процесс</p>

          <h2 className={css.title}>Как проходит консультация</h2>

          <p className={css.description}>
            Встреча проходит онлайн. Предварительная подготовка позволяет не
            тратить время консультации на построение карты и сразу перейти к
            вашему запросу.
          </p>
        </div>

        <div className={css.grid}>
          {steps.map((step) => (
            <article key={step.number} className={css.step}>
              <span className={css.number}>{step.number}</span>

              <h3 className={css.stepTitle}>{step.title}</h3>

              <p className={css.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

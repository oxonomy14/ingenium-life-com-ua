import Container from '@/components/Container/Container';

import css from './ConsultationTopics.module.css';

const topics = [
  {
    title: 'Работа и реализация',
    description:
      'Выбор профессионального направления, смена деятельности, поиск сильных сторон, развитие карьеры и понимание наиболее подходящего формата реализации.',
  },
  {
    title: 'Финансы',
    description:
      'Финансовые сценарии, отношение к ресурсам, способы заработка, ограничения и сильные стороны в вопросах денег и материальной устойчивости.',
  },
  {
    title: 'Отношения',
    description:
      'Повторяющиеся сценарии в отношениях, особенности партнёрства, эмоциональные потребности, совместимость и трудности во взаимодействии.',
  },
  {
    title: 'Здоровье',
    description:
      'Разбор астрологических факторов, связанных с образом жизни, нагрузкой, восстановлением и индивидуальными особенностями организма.',
  },
  {
    title: 'Жизненные перемены',
    description:
      'Периоды неопределённости, смена работы, переезд, завершение отношений, начало нового этапа и другие ситуации, когда важно увидеть общую картину.',
  },
  {
    title: 'Конкретный вопрос',
    description:
      'Можно прийти с отдельной ситуацией, решением или выбором, который требует более глубокого анализа и взгляда со стороны.',
  },
];

export default function ConsultationTopics() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.layout}>
          <div className={css.header}>
            <p className={css.eyebrow}>Темы консультаций</p>

            <h2 className={css.title}>С какими вопросами можно обратиться</h2>

            <p className={css.description}>
              Не обязательно заранее формулировать запрос в астрологических
              терминах. Достаточно описать ситуацию или вопрос, который сейчас
              для вас важен.
            </p>
          </div>

          <div className={css.grid}>
            {topics.map((topic) => (
              <article key={topic.title} className={css.card}>
                <h3 className={css.cardTitle}>{topic.title}</h3>

                <p className={css.cardDescription}>{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from '@/components/Container/Container';

import css from './AboutHistory.module.css';

const stages = [
  {
    period: '2018',
    title: 'InGenium у Києві',
    text: 'У 2018 році в Києві відбулася презентація курсу натальної астрології InGenium та розпочався набір на очне навчання за авторською програмою Павла Дементьєва.',
  },
  {
    period: '2018–2019',
    title: 'Очне навчання та перший випуск',
    text: 'Організацією очного навчання у Києві займався Андрій Семененко — випускник InGenium, який у 2018 році склав іспит за програмою курса Натальної астрології та отримав сертифікат найвищого ступеня. У Києві була сформована навчальна група за авторською програмою натальної астрології Павла Дементьєва. Навесні 2019 року студенти завершили навчання, склали підсумковий іспит Павлу Дементьєву та отримали сертифікати InGenium.',
  },
  {
    period: 'З 2019 року',
    title: 'Перехід у дистанційний формат',
    text: 'Після переходу команди до дистанційної роботи потреба в окремій локальній школі у Києві зникла. Водночас робота з українською аудиторією продовжилася онлайн.',
  },
  {
    period: 'Сьогодні',
    title: 'InGenium Life в Україні',
    text: 'Сьогодні ingenium-life.com.ua продовжує цю історію як українське представництво проєкту: тут публікуються освітні матеріали українською мовою, інформація про навчальні програми, консультації, вебінари та інші напрями InGenium.',
  },
];

export default function AboutHistory() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.header}>
            <p className={css.eyebrow}>Історія InGenium в Україні</p>

            <h2 className={css.title}>
              Від очної школи у Києві
              <span> до українського онлайн-проєкту</span>
            </h2>

            <p className={css.description}>
              Історія InGenium в Україні почалася з очного навчання у Києві.
              Згодом проєкт перейшов у дистанційний формат, зберігши зв’язок з
              українською аудиторією та продовживши розвиток освітнього напрямку
              онлайн.
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

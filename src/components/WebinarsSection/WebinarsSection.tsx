import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './WebinarsSection.module.css';

const webinars = [
  {
    category: 'Мировоззрение',
    title: 'Как меняется наше представление о себе',
    description:
      'Разговор о личности, внутренних сценариях и том, как формируется взгляд человека на себя и окружающий мир.',
    href: '/webinars/how-we-see-ourselves',
  },
  {
    category: 'Психология',
    title: 'Почему мы повторяем одни и те же сценарии',
    description:
      'Вебинар о повторяющихся моделях поведения, выборе и внутренних механизмах, которые влияют на наши решения.',
    href: '/webinars/repeating-scenarios',
  },
  {
    category: 'Культура и мышление',
    title: 'Как идеи формируют наше мировоззрение',
    description:
      'О влиянии культуры, среды и идей на то, как человек воспринимает события, отношения и собственный жизненный путь.',
    href: '/webinars/ideas-and-worldview',
  },
];

export default function WebinarsSection() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Авторские вебинары</p>

            <h2 className={css.title}>
              Темы за пределами
              <span> учебных программ</span>
            </h2>
          </div>

          <p className={css.description}>
            Авторские встречи о человеке, культуре, психологии, мышлении и
            мировоззрении — для тех, кому интересно исследовать тему глубже.
          </p>
        </div>

        <div className={css.grid}>
          {webinars.map((webinar, index) => (
            <article className={css.card} key={webinar.title}>
              <div className={css.visual}>
                <span className={css.index}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className={css.cardContent}>
                <p className={css.category}>{webinar.category}</p>

                <h3 className={css.cardTitle}>{webinar.title}</h3>

                <p className={css.cardText}>{webinar.description}</p>

                <Link href={webinar.href} className={css.cardLink}>
                  Подробнее
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={css.channel}>
          <div className={css.channelContent}>
            <p className={css.channelEyebrow}>Закрытый InGenium</p>

            <h3 className={css.channelTitle}>
              Все вебинары в рамках авторского пространства
            </h3>

            <p className={css.channelText}>
              Участники закрытого InGenium получают доступ к авторским
              вебинарам, дополнительным материалам и новым встречам по мере их
              выхода.
            </p>
          </div>

          <a
            href="https://ingenium-life.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.channelLink}
          >
            Узнать о подписке
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

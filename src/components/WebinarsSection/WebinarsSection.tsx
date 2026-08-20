import Link from 'next/link';

import Container from '@/components/Container/Container';

import { getWebinars } from '@/lib/webinars';

import css from './WebinarsSection.module.css';

export default function WebinarsSection() {
  const webinars = getWebinars().slice(0, 3);

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
            Авторские встречи по астрологии, Таро, психологии и символическим
            системам — для тех, кому интересно исследовать тему глубже.
          </p>
        </div>

        <div className={css.grid}>
          {webinars.map((webinar, index) => (
            <article className={css.card} key={webinar.slug}>
              <div className={css.visual}>
                <span className={css.index}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className={css.cardContent}>
                <p className={css.category}>{webinar.labelCategory}</p>

                <h3 className={css.cardTitle}>{webinar.title}</h3>

                <p className={css.cardText}>{webinar.shortDescription}</p>

                <Link
                  href={`/education/webinars/${webinar.slug}`}
                  className={css.cardLink}
                >
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

          <Link href="/closed-channel" className={css.channelLink}>
            Узнать о подписке
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

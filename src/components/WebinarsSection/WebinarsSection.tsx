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
            <p className={css.eyebrow}>Авторські вебінари</p>

            <h2 className={css.title}>
              Теми за межами
              <span> навчальних програм</span>
            </h2>
          </div>

          <p className={css.description}>
            Авторські зустрічі з астрології, Таро, психології та символічних
            систем — для тих, хто прагне досліджувати ці теми глибше.
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
                  Докладніше
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={css.channel}>
          <div className={css.channelContent}>
            <p className={css.channelEyebrow}>Закритий InGenium</p>

            <h3 className={css.channelTitle}>
              Усі вебінари в межах авторського простору
            </h3>

            <p className={css.channelText}>
              Учасники закритого InGenium отримують доступ до авторських
              вебінарів, додаткових матеріалів і нових зустрічей у міру їх
              виходу.
            </p>
          </div>

          <Link href="/closed-channel" className={css.channelLink}>
            Дізнатися про підписку
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

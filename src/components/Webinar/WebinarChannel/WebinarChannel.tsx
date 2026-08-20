// src/components/Webinar/WebinarChannel/WebinarChannel.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './WebinarChannel.module.css';

export default function WebinarChannel() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.card}>
          <div className={css.content}>
            <span className={css.eyebrow}>Закрытый InGenium</span>

            <h2 className={css.title}>
              Новые вебинары проходят в закрытом канале
            </h2>

            <p className={css.description}>
              Эта запись впервые была доступна участникам закрытого подписного
              канала Павла Дементьева.
            </p>

            <p className={css.description}>
              В канале регулярно выходят новые вебинары, авторские материалы,
              заметки и разборы по астрологии, Таро, психологии и другим темам
              InGenium.
            </p>

            <Link href="/closed-channel" className={css.button}>
              Узнать о закрытом канале
            </Link>
          </div>

          <div className={css.decor} aria-hidden="true">
            <div className={css.circleLarge} />
            <div className={css.circleSmall} />
          </div>
        </div>
      </Container>
    </section>
  );
}

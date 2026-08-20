// src/app/webinars/_components/ClosedChannel/ClosedChannel.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './ClosedChannel.module.css';

export default function ClosedChannel() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.card}>
          <div className={css.content}>
            <span className={css.eyebrow}>Закрытый InGenium</span>

            <h2 className={css.title}>Новые вебинары — в закрытом канале</h2>

            <p className={css.description}>
              Большинство представленных здесь вебинаров впервые проходили для
              участников закрытого канала Павла Дементьева.
            </p>

            <p className={css.description}>
              В подписке выходят новые вебинары, авторские материалы, наблюдения
              и разборы тем, которые не всегда становятся отдельными
              публикациями на сайте.
            </p>

            <Link href="/closed-channel" className={css.button}>
              Узнать о закрытом канале
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

// src/components/Webinar/WebinarMeta/WebinarMeta.tsx

import type { Webinar } from '@/types/webinar';

import Container from '@/components/Container/Container';

import css from './WebinarMeta.module.css';

type WebinarMetaProps = {
  webinar: Webinar;
};

export default function WebinarMeta({ webinar }: WebinarMetaProps) {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.item}>
            <span className={css.label}>Автор</span>

            <strong className={css.value}>Павел Дементьев</strong>
          </div>

          <div className={css.item}>
            <span className={css.label}>Доступ</span>

            <strong className={css.value}>
              {webinar.format || 'Вебинар в записи'}
            </strong>
          </div>

          {webinar.materials && webinar.materials.length > 0 && (
            <div className={css.item}>
              <span className={css.label}>Материалы</span>

              <strong className={css.value}>
                {webinar.materials.join(' · ')}
              </strong>
            </div>
          )}

          {webinar.channelWebinar && (
            <div className={css.item}>
              <span className={css.label}>Проект</span>

              <strong className={css.value}>Закрытый InGenium</strong>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

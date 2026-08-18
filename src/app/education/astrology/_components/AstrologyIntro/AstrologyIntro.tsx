import Container from '@/components/Container/Container';

import css from './AstrologyIntro.module.css';

export default function AstrologyIntro() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Подход к обучению</p>

            <h2 className={css.title}>
              Обучение астрологии как целостной системе
            </h2>
          </div>

          <div className={css.content}>
            <p className={css.lead}>
              В InGenium астрология изучается не как набор готовых трактовок, а
              как система взаимосвязей между планетами, знаками, домами,
              аспектами и жизненными событиями.
            </p>

            <p>
              Такой подход помогает перейти от механического запоминания
              значений к пониманию логики натальной карты. Студент учится
              анализировать отдельные показатели, соединять их между собой и
              видеть общую структуру карты человека.
            </p>

            <p>
              Курсы подходят тем, кто только начинает изучать астрологию, а
              также тем, кто уже знаком с основами и хочет углубить навыки
              анализа, синтеза, прогностики и практической работы.
            </p>

            <div className={css.note}>
              <span className={css.noteMark}>In</span>

              <p>
                Основная задача обучения — не дать готовые ответы, а
                сформировать систему мышления, с которой можно самостоятельно
                работать с натальной картой.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

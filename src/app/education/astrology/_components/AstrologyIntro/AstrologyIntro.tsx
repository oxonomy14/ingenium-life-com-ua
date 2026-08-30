import Container from '@/components/Container/Container';

import css from './AstrologyIntro.module.css';

export default function AstrologyIntro() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Підхід до навчання</p>

            <h2 className={css.title}>
              Навчання астрології як цілісної системи
            </h2>
          </div>

          <div className={css.content}>
            <p className={css.lead}>
              В InGenium астрологія вивчається не як набір готових трактувань, а
              як система взаємозв’язків між планетами, знаками, будинками,
              аспектами та життєвими подіями.
            </p>

            <p>
              Такий підхід допомагає перейти від механічного запам’ятовування
              значень до розуміння логіки натальної карти. Студент навчається
              аналізувати окремі показники, поєднувати їх між собою та бачити
              загальну структуру карти людини.
            </p>

            <p>
              Курси підходять тим, хто тільки починає вивчати астрологію, а
              також тим, хто вже знайомий з основами та хоче поглибити навички
              аналізу, синтезу, прогностики й практичної роботи.
            </p>

            <div className={css.note}>
              <span className={css.noteMark}>In</span>

              <p>
                Основне завдання навчання — не дати готові відповіді, а
                сформувати систему мислення, з якою можна самостійно працювати з
                натальною картою.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

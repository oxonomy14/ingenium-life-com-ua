import Image from 'next/image';

import Container from '@/components/Container/Container';

import css from './AboutAuthor.module.css';

export default function AboutAuthor() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.imageWrapper}>
            <Image
              src="/images/about/pavel-dementiev.webp"
              alt="Павло Дементьєв — автор проєкту InGenium Life"
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className={css.image}
            />
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор проєкту</p>

            <h2 className={css.title}>Павло Дементьєв</h2>

            <p className={css.lead}>
              Автор InGenium Life, викладач і дослідник астрології, Таро,
              психології та систем самопізнання.
            </p>

            <div className={css.text}>
              <p>
                InGenium створювався як простір, де різні системи знань можна
                розглядати не ізольовано, а у взаємозв’язку — через астрологію,
                символи, психологію, міфологію та спостереження за реальними
                життєвими процесами.
              </p>

              <p>
                В основі підходу — не запам’ятовування готових трактувань, а
                розуміння принципів і структури. Важливо не просто знати
                значення окремого символу чи показника, а бачити, як він працює
                в контексті цілого.
              </p>

              <p>
                Навчання в InGenium будується навколо розвитку самостійного
                мислення, здатності аналізувати матеріал і поступово формувати
                власне глибоке розуміння систем, що вивчаються.
              </p>
            </div>

            <div className={css.facts}>
              <div className={css.fact}>
                <span className={css.factValue}>Астрологія</span>
                <span className={css.factLabel}>
                  системний аналіз і практика
                </span>
              </div>

              <div className={css.fact}>
                <span className={css.factValue}>Таро</span>
                <span className={css.factLabel}>
                  символічна мова та інтерпретація
                </span>
              </div>

              <div className={css.fact}>
                <span className={css.factValue}>Психологія</span>
                <span className={css.factLabel}>
                  дослідження особистості та внутрішніх процесів
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './ReviewsCta.module.css';

export default function ReviewsCta() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div>
            <span className={css.eyebrow}>Обучение InGenium</span>

            <h2 className={css.title}>
              Выберите программу для дальнейшего обучения
            </h2>

            <p className={css.text}>
              Курсы по астрологии, Таро и юнгианской психологии — от знакомства
              с основами до углублённых авторских программ.
            </p>
          </div>

          <Link href="/education" className={css.button}>
            Смотреть программы
          </Link>
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './EducationPrograms.module.css';

const directions = [
  {
    number: '01',
    title: 'Астрология',
    description:
      'От основ натальной карты до системного анализа личности, событий и жизненных процессов.',
    href: '/education/astrology',
  },
  {
    number: '02',
    title: 'Таро',
    description:
      'Изучение символического языка Таро, структуры системы и принципов интерпретации карт.',
    href: '/education/tarot',
  },
  {
    number: '03',
    title: 'Юнгианская психология',
    description:
      'Архетипы, бессознательное, символы и идеи аналитической психологии Карла Густава Юнга.',
    href: '/education/jungian-psychology',
  },
];

export default function EducationPrograms() {
  return (
    <section className={css.section} id="programs">
      <Container>
        <div className={css.heading}>
          <p className={css.eyebrow}>Направления</p>

          <h2 className={css.title}>Выберите направление обучения</h2>

          <p className={css.intro}>
            Каждая программа строится вокруг понимания системы: от базовых
            принципов к более сложным связям и практическому применению.
          </p>
        </div>

        <div className={css.grid}>
          {directions.map((direction) => (
            <Link
              href={direction.href}
              className={css.card}
              key={direction.href}
            >
              <div className={css.cardTop}>
                <span className={css.number}>{direction.number}</span>
                <span className={css.arrow} aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className={css.cardContent}>
                <h3>{direction.title}</h3>
                <p>{direction.description}</p>
              </div>

              <span className={css.linkText}>Перейти к курсам</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

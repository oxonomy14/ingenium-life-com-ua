import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './FeaturedPrograms.module.css';

const programs = [
  {
    category: 'Астрология',
    title: 'Живая Астрология',
    description:
      'Практический курс для тех, кто хочет системно понимать натальную карту и уверенно применять знания в работе.',
    meta: ['Онлайн', 'Авторская программа'],
    href: '/education/astrology/live-astrology',
  },
  {
    category: 'Таро',
    title: 'Практика Таро',
    description:
      'Курс о символике, логике раскладов и самостоятельной интерпретации карт без механического заучивания значений.',
    meta: ['Онлайн', 'Практический формат'],
    href: '/education/tarot',
  },
  {
    category: 'Психология',
    title: 'Психология отношений',
    description:
      'Программа о сценариях поведения, взаимодействии между людьми и понимании эмоциональных процессов.',
    meta: ['Онлайн', 'Авторские материалы'],
    href: '/education/psychology',
  },
];

export default function FeaturedPrograms() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Обучение</p>

            <h2 className={css.title}>
              Популярные
              <span> программы InGenium</span>
            </h2>
          </div>

          <Link href="/education" className={css.allLink}>
            Все программы
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={css.grid}>
          {programs.map((program) => (
            <article className={css.card} key={program.title}>
              <div>
                <p className={css.category}>{program.category}</p>

                <h3 className={css.cardTitle}>{program.title}</h3>

                <p className={css.description}>{program.description}</p>

                <div className={css.meta}>
                  {program.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <Link href={program.href} className={css.cardLink}>
                Подробнее
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

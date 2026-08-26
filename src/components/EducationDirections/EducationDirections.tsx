import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './EducationDirections.module.css';

const directions = [
  {
    title: 'Астрологія',
    text: 'Системне навчання натальної астрології, інтерпретації карти та практичних методів аналізу.',
    href: '/education/astrology',
    linkLabel: 'Переглянути програми',
    featured: true,
  },
  {
    title: 'Таро',
    text: 'Вивчення символіки, структури системи та практичного читання розкладів.',
    href: '/education/tarot',
    linkLabel: 'Переглянути програми',
  },
  {
    title: 'Юнгіанська психологія',
    text: 'Програми та матеріали про особистість, стосунки, поведінку та психологію людини.',
    href: '/education/jungian-psychology',
    linkLabel: 'Переглянути програми',
  },
  {
    title: 'InGenium у Telegram',
    text: 'Нотатки, спостереження та матеріали про астрологію, Таро, психологію й розуміння людини.',
    href: 'https://t.me/ingenium_life',
    linkLabel: 'Перейти в Telegram',
    external: true,
  },
];

export default function EducationDirections() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div className={css.heading}>
            <p className={css.eyebrow}>InGenium Life</p>

            <h2 className={css.title}>
              Навчання, знання
              <span> та авторські проєкти</span>
            </h2>
          </div>

          <p className={css.description}>
            Оберіть напрям для системного навчання або познайомтеся з авторським
            простором InGenium поза межами окремих курсів.
          </p>
        </div>

        <div className={css.grid}>
          {directions.map((direction) => {
            const content = (
              <>
                <div className={css.cardTop}>
                  {direction.featured && (
                    <span className={css.badge}>Основний напрям</span>
                  )}

                  <h3 className={css.cardTitle}>{direction.title}</h3>

                  <p className={css.cardText}>{direction.text}</p>
                </div>

                <span className={css.cardLink}>
                  {direction.linkLabel}
                  <span aria-hidden="true">→</span>
                </span>
              </>
            );

            if (direction.external) {
              return (
                <a
                  key={direction.title}
                  href={direction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${css.card} ${css.channel}`}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={direction.title}
                href={direction.href}
                className={`${css.card} ${
                  direction.featured ? css.featured : ''
                }`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

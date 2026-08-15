import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './EducationDirections.module.css';

const directions = [
  {
    title: 'Астрология',
    text: 'Системное обучение натальной астрологии, интерпретации карты и практическим методам анализа.',
    href: '/education/astrology',
    linkLabel: 'Смотреть программы',
    featured: true,
  },
  {
    title: 'Таро',
    text: 'Изучение символики, структуры системы и практического чтения раскладов.',
    href: '/education/tarot',
    linkLabel: 'Смотреть программы',
  },
  {
    title: 'Юнгианская психология',
    text: 'Программы и материалы о личности, отношениях, поведении и психологии человека.',
    href: '/education/jungian-psychology',
    linkLabel: 'Смотреть программы',
  },
  {
    title: 'Закрытый InGenium',
    text: 'Авторские вебинары и материалы о человеке, культуре, мышлении и мировоззрении.',
    href: 'https://ingenium-life.com',
    linkLabel: 'Узнать о проекте',
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
              Обучение, знания
              <span> и авторские проекты</span>
            </h2>
          </div>

          <p className={css.description}>
            Выберите направление для системного обучения или познакомьтесь с
            авторским пространством InGenium за рамками отдельных курсов.
          </p>
        </div>

        <div className={css.grid}>
          {directions.map((direction) => {
            const content = (
              <>
                <div className={css.cardTop}>
                  {direction.featured && (
                    <span className={css.badge}>Основное направление</span>
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

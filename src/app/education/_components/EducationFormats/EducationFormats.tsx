import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './EducationFormats.module.css';

const formats = [
  {
    label: 'Основной формат',
    title: 'Курсы',
    description:
      'Последовательные программы обучения с понятной структурой: от базовых принципов к более сложным темам и практике.',
    href: '#directions',
    linkText: 'Смотреть направления',
  },
  {
    label: 'Отдельные занятия',
    title: 'Вебинары',
    description:
      'Занятия по конкретным темам астрологии, Таро, психологии и мировоззренческим вопросам без необходимости проходить полный курс.',
    href: '/education/webinars',
    linkText: 'Смотреть вебинары',
  },
];

export default function EducationFormats() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.heading}>
          <p className={css.eyebrow}>Форматы обучения</p>

          <h2 className={css.title}>
            Выберите формат
            <span> под свою задачу</span>
          </h2>

          <p className={css.description}>
            Можно пройти системную программу или сосредоточиться на отдельной
            теме в формате вебинара.
          </p>
        </div>

        <div className={css.grid}>
          {formats.map((format) => (
            <article className={css.card} key={format.title}>
              <div>
                <p className={css.label}>{format.label}</p>

                <h3 className={css.cardTitle}>{format.title}</h3>

                <p className={css.cardDescription}>{format.description}</p>
              </div>

              <Link href={format.href} className={css.link}>
                {format.linkText}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

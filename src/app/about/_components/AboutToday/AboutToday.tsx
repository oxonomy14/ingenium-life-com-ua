import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AboutToday.module.css';

const items = [
  {
    number: '02',
    title: 'Статьи',
    text: 'Открытые материалы об астрологии, Таро, психологии и других темах, которые исследует InGenium.',
    href: '/articles',
    linkText: 'Читать статьи',
  },
  {
    number: '03',
    title: 'Консультации',
    text: 'Индивидуальная работа и разбор конкретных вопросов с использованием инструментов InGenium.',
    href: '/consultations',
    linkText: 'О консультациях',
  },
  {
    number: '04',
    title: 'Telegram',
    text: 'Открытый канал с авторскими заметками, наблюдениями, небольшими материалами и новостями проекта.',
    href: 'https://t.me/ingenium_life',
    linkText: 'Перейти в Telegram',
    external: true,
  },
  {
    number: '05',
    title: 'Закрытый InGenium',
    text: 'Пространство для участников сообщества: авторские материалы, вебинары, разборы и более глубокая работа с темами проекта.',
    href: '/closed-channel',
    linkText: 'Узнать больше',
  },
];

export default function AboutToday() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>InGenium сегодня</p>

          <h2 className={css.title}>
            Учиться, исследовать
            <span> и оставаться в диалоге</span>
          </h2>

          <p className={css.description}>
            Сегодня InGenium — это не только образовательные программы. Проект
            объединяет разные форматы, через которые можно знакомиться с
            материалами, углублять знания и продолжать обучение.
          </p>
        </div>

        <div className={css.grid}>
          <article className={css.featured}>
            <span className={css.number}>01</span>

            <div className={css.featuredContent}>
              <p className={css.label}>Основное направление</p>

              <h3 className={css.featuredTitle}>Обучение</h3>

              <p className={css.featuredText}>
                Курсы и образовательные программы InGenium помогают пройти путь
                от базовых принципов к системному пониманию и самостоятельной
                практике.
              </p>

              <Link href="/education" className={css.featuredLink}>
                Выбрать обучение
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          <div className={css.items}>
            {items.map((item) => (
              <article className={css.item} key={item.title}>
                <span className={css.number}>{item.number}</span>

                <div className={css.itemContent}>
                  <h3 className={css.itemTitle}>{item.title}</h3>

                  <p className={css.itemText}>{item.text}</p>

                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={css.link}
                    >
                      {item.linkText}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link href={item.href} className={css.link}>
                      {item.linkText}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

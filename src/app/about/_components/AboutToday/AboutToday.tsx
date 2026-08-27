import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AboutToday.module.css';

const items = [
  {
    number: '02',
    title: 'Статті',
    text: 'Відкриті матеріали про астрологію, Таро, психологію та інші теми, які досліджує InGenium.',
    href: '/articles',
    linkText: 'Читати статті',
  },
  {
    number: '03',
    title: 'Консультації',
    text: 'Індивідуальна робота та розбір конкретних питань із використанням підходів та інструментів InGenium.',
    href: '/consultations',
    linkText: 'Про консультації',
  },
  {
    number: '04',
    title: 'Telegram',
    text: 'Відкритий канал з авторськими нотатками, спостереженнями, невеликими матеріалами та новинами проєкту.',
    href: 'https://t.me/ingenium_life',
    linkText: 'Перейти в Telegram',
    external: true,
  },
  {
    number: '05',
    title: 'Закритий InGenium',
    text: 'Простір для учасників спільноти: авторські матеріали, вебінари, розбори та поглиблена робота з темами проєкту.',
    href: '/closed-channel',
    linkText: 'Дізнатися більше',
  },
];

export default function AboutToday() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>InGenium сьогодні</p>

          <h2 className={css.title}>
            Навчатися, досліджувати
            <span> та залишатися в діалозі</span>
          </h2>

          <p className={css.description}>
            Сьогодні InGenium — це не лише освітні програми. Проєкт об’єднує
            різні формати, через які можна знайомитися з матеріалами,
            поглиблювати знання та продовжувати навчання.
          </p>
        </div>

        <div className={css.grid}>
          <article className={css.featured}>
            <span className={css.number}>01</span>

            <div className={css.featuredContent}>
              <p className={css.label}>Основний напрям</p>

              <h3 className={css.featuredTitle}>Навчання</h3>

              <p className={css.featuredText}>
                Курси та освітні програми InGenium допомагають пройти шлях від
                базових принципів до системного розуміння та самостійної
                практики.
              </p>

              <Link href="/education" className={css.featuredLink}>
                Обрати навчання
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

// src/app/about/_components/AboutWebsites/AboutWebsites.tsx

import Container from '@/components/Container/Container';

import css from './AboutWebsites.module.css';

const websites = [
  {
    domain: 'ingenium-life.com.ua',
    title: 'InGenium Life Україна',
    description:
      'Офіційний український сайт InGenium Life зі статтями, навчальними програмами, вебінарами, консультаціями та матеріалами про проєкт.',
    href: 'https://ingenium-life.com.ua',
    current: true,
  },
  {
    domain: 'ingenium-life.com',
    title: 'InGenium Life',
    description:
      'Офіційний сайт InGenium Life для розвитку актуальних напрямів проєкту та роботи з ширшою аудиторією.',
    href: 'https://ingenium-life.com',
  },
  {
    domain: 'ingenium-life.org',
    title: 'Каталог програм InGenium',
    description:
      'Офіційний ресурс із каталогом курсів та освітніх програм, створених у межах проєкту InGenium.',
    href: 'https://ingenium-life.org',
  },
  {
    domain: 'ingenium-life.ru',
    title: 'Історичний блог InGenium',
    description:
      'Один із перших офіційних вебресурсів InGenium, на якому протягом багатьох років публікувалися авторські статті та матеріали проєкту.',
    href: 'https://ingenium-life.ru',
  },
];

export default function AboutWebsites() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Офіційні сайти</p>

          <h2 className={css.title}>
            Офіційні ресурси
            <span> InGenium</span>
          </h2>

          <p className={css.description}>
            InGenium представлений на кількох доменах, і всі вони належать до
            одного проєкту. Ці ресурси створювалися в різні періоди розвитку
            InGenium та виконують різні завдання. Тут зібрані офіційні сайти,
            щоб їх можна було відрізнити від сторонніх або неофіційних ресурсів.
          </p>
        </div>

        <div className={css.grid}>
          {websites.map((website) => (
            <article className={css.card} key={website.domain}>
              <p className={css.domain}>{website.domain}</p>

              <h3 className={css.cardTitle}>{website.title}</h3>

              <p className={css.cardText}>{website.description}</p>

              {website.current ? (
                <span className={css.current}>Ви зараз на цьому сайті</span>
              ) : (
                <a
                  href={website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.link}
                >
                  Перейти на сайт
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

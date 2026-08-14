import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './LatestArticles.module.css';

const articles = [
  {
    category: 'Астрология',
    title: 'Как читать натальную карту как целостную систему',
    excerpt:
      'Почему важно видеть не отдельные показатели, а связи между элементами карты и общую структуру.',
    href: '/articles/astrology/how-to-read-natal-chart',
    image: '/images/articles/natal-chart.jpg',
    featured: true,
  },
  {
    category: 'Психология',
    title: 'Почему мы повторяем знакомые сценарии',
    excerpt:
      'О механизмах поведения, которые незаметно воспроизводятся в отношениях и жизненных решениях.',
    href: '/articles/psychology/repeating-scenarios',
    image: '/images/articles/psychology-scenarios.jpg',
  },
  {
    category: 'Таро',
    title: 'Как понимать символы Таро глубже готовых значений',
    excerpt:
      'О чтении образов, контексте и развитии собственного понимания системы.',
    href: '/articles/tarot/symbols-and-meaning',
    image: '/images/articles/tarot-symbols.jpg',
  },
];

export default function LatestArticles() {
  const featuredArticle = articles.find((article) => article.featured);
  const secondaryArticles = articles.filter((article) => !article.featured);

  if (!featuredArticle) return null;

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Статьи</p>

            <h2 className={css.title}>
              Новые материалы
              <span> InGenium Life</span>
            </h2>
          </div>

          <Link href="/articles" className={css.allLink}>
            Все статьи
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={css.grid}>
          <Link
            href={featuredArticle.href}
            className={`${css.card} ${css.featured}`}
          >
            <div className={css.featuredImageWrapper}>
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={css.image}
              />
            </div>

            <div className={css.featuredContent}>
              <p className={css.category}>{featuredArticle.category}</p>

              <h3 className={css.featuredTitle}>{featuredArticle.title}</h3>

              <p className={css.excerpt}>{featuredArticle.excerpt}</p>

              <span className={css.readLink}>
                Читать статью
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>

          <div className={css.secondary}>
            {secondaryArticles.map((article) => (
              <Link
                href={article.href}
                className={`${css.card} ${css.smallCard}`}
                key={article.title}
              >
                <div className={css.smallImageWrapper}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 40vw"
                    className={css.image}
                  />
                </div>

                <div className={css.smallContent}>
                  <p className={css.category}>{article.category}</p>

                  <h3 className={css.smallTitle}>{article.title}</h3>

                  <p className={css.smallExcerpt}>{article.excerpt}</p>

                  <span className={css.readLink}>
                    Читать
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

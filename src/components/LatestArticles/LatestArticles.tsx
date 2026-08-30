import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import { getAllArticles } from '@/lib/articles';

import css from './LatestArticles.module.css';

const HOME_ARTICLE_SLUGS = [
  'zhyva-astrologiya',
  'kompleksy-i-arhetipy',
  '5-pravil-chteniya-sotsialnyh-i-vysshih-planet-v-natalnoj-karte',
];

export default function LatestArticles() {
  const allArticles = getAllArticles();

  const articles = HOME_ARTICLE_SLUGS.map((slug) =>
    allArticles.find((article) => article.slug === slug),
  ).filter((article) => article !== undefined);

  const [featuredArticle, ...secondaryArticles] = articles;

  if (!featuredArticle) return null;

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Статті</p>

            <h2 className={css.title}>
              Корисні матеріали
              <span> InGenium Life</span>
            </h2>
          </div>

          <Link href="/articles" className={css.allLink}>
            Усі статті
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={css.grid}>
          <Link
            href={`/articles/${featuredArticle.slug}`}
            className={`${css.card} ${css.featured}`}
          >
            <div className={css.featuredImageWrapper}>
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt || featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={css.image}
              />
            </div>

            <div className={css.featuredContent}>
              <p className={css.category}>{featuredArticle.labelCategory}</p>

              <h3 className={css.featuredTitle}>{featuredArticle.title}</h3>

              <p className={css.excerpt}>
                {featuredArticle.shortDescription ||
                  featuredArticle.description}
              </p>

              <span className={css.readLink}>
                Читати статтю
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>

          <div className={css.secondary}>
            {secondaryArticles.map((article) => (
              <Link
                href={`/articles/${article.slug}`}
                className={`${css.card} ${css.smallCard}`}
                key={article.slug}
              >
                <div className={css.smallImageWrapper}>
                  <Image
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 40vw"
                    className={css.image}
                  />
                </div>

                <div className={css.smallContent}>
                  <p className={css.category}>{article.labelCategory}</p>

                  <h3 className={css.smallTitle}>{article.title}</h3>

                  <p className={css.smallExcerpt}>
                    {article.shortDescription || article.description}
                  </p>

                  <span className={css.readLink}>
                    Читати
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

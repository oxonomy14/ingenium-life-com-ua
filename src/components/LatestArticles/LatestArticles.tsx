import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import { getAllArticles } from '@/lib/articles';

import css from './LatestArticles.module.css';

export default function LatestArticles() {
  const articles = getAllArticles().slice(0, 3);

  const [featuredArticle, ...secondaryArticles] = articles;

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
                Читать статью
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
                    {article.shortDescription || featuredArticle.description}
                  </p>

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

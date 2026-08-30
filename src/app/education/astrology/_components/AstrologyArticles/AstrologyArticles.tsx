import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import type { Articles } from '@/types/article';

import css from './AstrologyArticles.module.css';

type AstrologyArticlesProps = {
  articles: Articles[];
};

export default function AstrologyArticles({
  articles,
}: AstrologyArticlesProps) {
  if (!articles.length) {
    return null;
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Матеріали</p>

            <h2 className={css.title}>Статті про астрологію</h2>

            <p className={css.description}>
              Додаткові матеріали про астрологію, натальну карту та принципи
              аналізу.
            </p>
          </div>

          <Link href="/articles/astrology" className={css.allLink}>
            Усі статті
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={css.grid}>
          {articles.map((article) => (
            <article key={article.slug} className={css.card}>
              <Link
                href={`/articles/${article.slug}`}
                className={css.imageLink}
              >
                <div className={css.imageWrapper}>
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={css.image}
                    />
                  )}
                </div>
              </Link>

              <div className={css.content}>
                <p className={css.category}>Астрологія</p>

                <h3 className={css.cardTitle}>
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {article.description && (
                  <p className={css.excerpt}>{article.description}</p>
                )}

                <Link
                  href={`/articles/${article.slug}`}
                  className={css.readMore}
                >
                  Читати статтю
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

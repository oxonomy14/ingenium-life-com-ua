// src/app/education/tarot/_components/Articles/Articles.tsx

import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import type { Articles } from '@/types/article';

import css from './Articles.module.css';

type ArticlesProps = {
  articles: Articles[];
};

export default function Articles({ articles }: ArticlesProps) {
  if (!articles.length) {
    return null;
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Материалы</p>

            <h2 className={css.title}>Статьи о Таро</h2>

            <p className={css.description}>
              Дополнительные материалы о системе Таро, символике Арканов,
              интерпретации карт и практике чтения раскладов.
            </p>
          </div>

          <Link href="/articles/tarot" className={css.allLink}>
            Все статьи
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={css.grid}>
          {articles.map((article) => {
            const articleHref = `/articles/${article.slug}`;

            return (
              <article key={article.slug} className={css.card}>
                <Link href={articleHref} className={css.imageLink}>
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
                  <p className={css.category}>Таро</p>

                  <h3 className={css.cardTitle}>
                    <Link href={articleHref}>{article.title}</Link>
                  </h3>

                  {article.description && (
                    <p className={css.excerpt}>{article.description}</p>
                  )}

                  <Link href={articleHref} className={css.readMore}>
                    Читать статью
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './RelatedArticles.module.css';

type RelatedArticle = {
  slug: string;
  title: string;
  labelCategory: string;
  shortDescription?: string;
};

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles.length) {
    return null;
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <div>
            <p className={css.eyebrow}>Продолжить чтение</p>

            <h2 className={css.title}>По этой теме</h2>
          </div>

          <Link href="/articles" className={css.allLink}>
            Все статьи
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={css.list}>
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className={css.item}
            >
              <span className={css.number}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className={css.content}>
                <span className={css.category}>{article.labelCategory}</span>

                <h3 className={css.articleTitle}>{article.title}</h3>

                {article.shortDescription && (
                  <p className={css.description}>{article.shortDescription}</p>
                )}
              </div>

              <span className={css.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

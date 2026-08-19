// src/app/education/jungian-psychology/_components/Articles/Articles.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';
import ArticleCard from '@/components/ArticleCard/ArticleCard';

import type { Articles as ArticleItem } from '@/types/article';

import css from './Articles.module.css';

type ArticlesProps = {
  articles: ArticleItem[];
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
            <p className={css.eyebrow}>Материалы по теме</p>

            <h2 className={css.title}>Статьи о юнгианской психологии</h2>

            <p className={css.description}>
              Дополнительные материалы об архетипах, символах, психологических
              типах и процессах бессознательного.
            </p>
          </div>

          <Link
            href="/articles/category/jungian-psychology"
            className={css.link}
          >
            Все статьи
          </Link>
        </div>

        <div className={css.grid}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}

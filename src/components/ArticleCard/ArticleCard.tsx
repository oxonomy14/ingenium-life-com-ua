import Image from 'next/image';
import Link from 'next/link';

import type { Articles } from '@/types/article';

import css from './ArticleCard.module.css';

type ArticleCardProps = {
  article: Articles;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className={css.card}>
      <Link href={`/articles/${article.slug}`} className={css.imageLink}>
        <div className={css.imageWrapper}>
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={css.image}
          />

          <span className={css.category}>{article.category}</span>
        </div>
      </Link>

      <div className={css.content}>
        <time className={css.date} dateTime={article.date}>
          {formatDate(article.date)}
        </time>

        <h2 className={css.title}>
          <Link href={`/articles/${article.slug}`} className={css.titleLink}>
            {article.title}
          </Link>
        </h2>

        <p className={css.description}>{article.description}</p>

        <Link href={`/articles/${article.slug}`} className={css.link}>
          Читать статью
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

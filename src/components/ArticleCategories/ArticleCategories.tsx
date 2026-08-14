import Link from 'next/link';

import { articleCategories } from '@/data/articleCategories';

import css from './ArticleCategories.module.css';

type ArticleCategoriesProps = {
  activeCategory?: string;
};

export default function ArticleCategories({
  activeCategory,
}: ArticleCategoriesProps) {
  return (
    <nav className={css.categories} aria-label="Категории статей">
      <Link
        href="/articles"
        className={`${css.category} ${
          !activeCategory ? css.categoryActive : ''
        }`}
      >
        Все статьи
      </Link>

      {articleCategories.map((category) => (
        <Link
          key={category.slug}
          href={`/articles/category/${category.slug}`}
          className={`${css.category} ${
            activeCategory === category.slug ? css.categoryActive : ''
          }`}
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
}

import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import ArticleCard from '@/components/ArticleCard/ArticleCard';
import Container from '@/components/Container/Container';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

import { articleCategories } from '@/data/articleCategories';
import { getArticlesByCategory } from '@/lib/articles';
import ArticleCategories from '@/components/ArticleCategories/ArticleCategories';
import css from '../../ArcticlesPage.module.css';

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return articleCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  const currentCategory = articleCategories.find(
    (item) => item.slug === category,
  );

  if (!currentCategory) {
    return {};
  }

  const url = `/articles/category/${currentCategory.slug}`;

  return {
    title: currentCategory.title,
    description: currentCategory.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: currentCategory.title,
      description: currentCategory.description,
      url,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const currentCategory = articleCategories.find(
    (item) => item.slug === category,
  );

  if (!currentCategory) {
    notFound();
  }

  const articles = getArticlesByCategory(currentCategory.label);

  return (
    <LayoutShell>
      <div className={css.page}>
        <Container>
          <header className={css.header}>
            <p className={css.eyebrow}>Библиотека InGenium</p>

            <h1 className={css.title}>{currentCategory.title}</h1>

            <p className={css.description}>{currentCategory.description}</p>
          </header>

          <ArticleCategories activeCategory={currentCategory.slug} />

          <section className={css.articles} aria-labelledby="articles-title">
            <div className={css.sectionHeader}>
              <div>
                <p className={css.sectionEyebrow}>Материалы</p>

                <h2 id="articles-title" className={css.sectionTitle}>
                  Статьи по теме «{currentCategory.label}»
                </h2>
              </div>

              <p className={css.count}>
                {articles.length} {getArticleWord(articles.length)}
              </p>
            </div>

            {articles.length > 0 ? (
              <div className={css.grid}>
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <p className={css.empty}>В этой категории пока нет статей.</p>
            )}
          </section>
        </Container>
      </div>
    </LayoutShell>
  );
}

function getArticleWord(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return 'статья';
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return 'статьи';
  }

  return 'статей';
}

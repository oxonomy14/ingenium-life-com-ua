import type { Metadata } from 'next';

import ArticleCard from '@/components/ArticleCard/ArticleCard';
import Container from '@/components/Container/Container';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

import { getAllArticles } from '@/lib/articles';

import css from './ArcticlesPage.module.css';
import ArticleCategories from '@/components/ArticleCategories/ArticleCategories';

export const metadata: Metadata = {
  title: 'Статьи об астрологии, Таро и психологии',

  description:
    'Статьи InGenium об астрологии, Таро, психологии, отношениях и самопознании. Практические материалы, разборы и авторские исследования.',

  alternates: {
    canonical: '/articles',
  },

  openGraph: {
    title: 'Статьи InGenium — астрология, Таро и психология',

    description:
      'Практические материалы, разборы и авторские статьи об астрологии, Таро, психологии и самопознании.',

    url: '/articles',
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <LayoutShell>
      <div className={css.page}>
        <Container>
          <header className={css.header}>
            <p className={css.eyebrow}>Библиотека InGenium</p>

            <h1 className={css.title}>Статьи</h1>

            <p className={css.description}>
              Материалы об астрологии, Таро, психологии и человеке — от базовых
              понятий до глубоких авторских разборов.
            </p>
          </header>

          <ArticleCategories />

          <section className={css.articles} aria-labelledby="articles-title">
            <div className={css.sectionHeader}>
              <div>
                <p className={css.sectionEyebrow}>Материалы</p>

                <h2 id="articles-title" className={css.sectionTitle}>
                  Все статьи
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
              <p className={css.empty}>Статьи пока не опубликованы.</p>
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

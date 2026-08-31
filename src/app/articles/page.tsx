import type { Metadata } from 'next';

import ArticleCard from '@/components/ArticleCard/ArticleCard';
import Container from '@/components/Container/Container';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

import { getAllArticles } from '@/lib/articles';

import css from './ArcticlesPage.module.css';
import ArticleCategories from '@/app/articles/_components/ArticleCategories/ArticleCategories';

export const metadata: Metadata = {
  title: 'Статті про астрологію, Таро та психологію',

  description:
    'Статті InGenium про астрологію, Таро, психологію, стосунки та самопізнання. Практичні матеріали, розбори й авторські дослідження.',

  alternates: {
    canonical: '/articles',
  },

  openGraph: {
    title: 'Статті InGenium — астрологія, Таро та психологія',

    description:
      'Практичні матеріали, розбори й авторські статті про астрологію, Таро, психологію та самопізнання.',

    url: '/articles',
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  function getArticleWord(count: number) {
    const mod10 = count % 10;
    const mod100 = count % 100;

    if (mod10 === 1 && mod100 !== 11) {
      return 'стаття';
    }

    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
      return 'статті';
    }

    return 'статей';
  }

  return (
    <LayoutShell>
      <div className={css.page}>
        <Container>
          <header className={css.header}>
            <p className={css.eyebrow}>Бібліотека InGenium</p>

            <h1 className={css.title}>Статті</h1>

            <p className={css.description}>
              Матеріали про астрологію, Таро, психологію та людину — від базових
              понять до глибоких авторських розборів.
            </p>
          </header>

          <ArticleCategories />

          <section className={css.articles} aria-labelledby="articles-title">
            <div className={css.sectionHeader}>
              <div>
                <p className={css.sectionEyebrow}>Матеріали</p>

                <h2 id="articles-title" className={css.sectionTitle}>
                  Усі статті
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
              <p className={css.empty}>Статті поки що не опубліковані.</p>
            )}
          </section>
        </Container>
      </div>
    </LayoutShell>
  );
}

// src/app/articles/[slug]/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import ArticleSchema from '@/components/Seo/ArticleSchema/ArticleSchema';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';
import Container from '@/components/Container/Container';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

import { siteConfig } from '@/config/site';
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';

import css from './ArticlePage.module.css';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = getAllArticleSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const articleUrl = `/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.description,

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: articleUrl,
      publishedTime: article.date,
      modifiedTime: article.updatedAt,

      images: article.image
        ? [
            {
              url: article.image,
              alt: article.imageAlt || article.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articlePath = `/articles/${article.slug}`;
  const articleUrl = `${siteConfig.url}${articlePath}`;

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(article.date));

  return (
    <LayoutShell>
      <ArticleSchema
        title={article.title}
        description={article.description}
        slug={article.slug}
        datePublished={article.date}
        dateModified={article.updatedAt}
        image={article.image}
        category={article.category}
      />
      <BreadcrumbSchema
        items={[
          {
            name: 'Главная',
            url: '/',
          },
          {
            name: 'Статьи',
            url: '/articles',
          },
          {
            name: article.title,
            url: articlePath,
          },
        ]}
      />
      <div className={css.article}>
        <Container>
          <header className={css.header}>
            <nav className={css.breadcrumbs} aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>

              <span aria-hidden="true">/</span>

              <Link href="/articles">Статьи</Link>

              <span aria-hidden="true">/</span>

              <span aria-current="page">{article.title}</span>
            </nav>

            <p className={css.category}>{article.category}</p>

            <h1 className={css.title}>{article.title}</h1>

            <p className={css.lead}>{article.description}</p>

            <div className={css.meta}>
              <time dateTime={article.date}>{formattedDate}</time>
            </div>
          </header>

          {article.image && (
            <div className={css.cover}>
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 1280px"
                className={css.coverImage}
              />
            </div>
          )}

          <div className={css.articleLayout}>
            <article className={css.content}>
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </article>
          </div>
        </Container>
      </div>
    </LayoutShell>
  );
}

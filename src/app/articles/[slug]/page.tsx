// src/app/articles/[slug]/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import Container from '@/components/Container/Container';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';

import css from './ArticlePage.module.css';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ingenium-life.com.ua';

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

  const articleUrl = `${baseUrl}/articles/${article.slug}`;

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

  const articleUrl = `${baseUrl}/articles/${article.slug}`;

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(article.date));

  /* Article JSON-LD */

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: article.title,

    description: article.description,

    datePublished: article.date,

    ...(article.updatedAt && {
      dateModified: article.updatedAt,
    }),

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },

    author: {
      '@type': 'Organization',
      name: 'InGenium Life',
      url: baseUrl,
    },

    publisher: {
      '@type': 'Organization',
      name: 'InGenium Life',
      url: baseUrl,
    },

    ...(article.image && {
      image: `${baseUrl}${article.image}`,
    }),

    articleSection: article.category,
  };

  /* BreadcrumbList JSON-LD */

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: baseUrl,
      },

      {
        '@type': 'ListItem',
        position: 2,
        name: 'Статьи',
        item: `${baseUrl}/articles`,
      },

      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <LayoutShell>
      {/* JSON-LD */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className={css.article}>
        <Container>
          <header className={css.header}>
            <nav className={css.breadcrumbs} aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>

              <span>/</span>

              <Link href="/articles">Статьи</Link>

              <span>/</span>

              <span>{article.title}</span>
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

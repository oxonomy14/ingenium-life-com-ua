// src/app/articles/[slug]/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import AuthorSection from './_components/AuthorSection/AuthorSection';
import RelatedArticles from './_components/RelatedArticles/RelatedArticles';
import ArticleSchema from '@/components/Seo/ArticleSchema/ArticleSchema';
import BreadcrumbSchema from '@/components/Seo/BreadcrumbSchema/BreadcrumbSchema';
import Container from '@/components/Container/Container';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

import { siteConfig } from '@/config/site';

import {
  getAllArticleSlugs,
  getArticleBySlug,
  getArticlesByCategory,
} from '@/lib/articles';

import { getAuthorById } from '@/data/authors';

import ArticleCourseBanner from './_components/ArticleCourseBanner/ArticleCourseBanner';

import { getCourse } from '@/lib/courses';

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

  const author = article.authorId ? getAuthorById(article.authorId) : undefined;

  const relatedArticles = getArticlesByCategory(article.category)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  const course = article.course
    ? getCourse(article.course.category, article.course.slug)
    : null;

  const courseHref = article.course
    ? `/education/${article.course.category}/${article.course.slug}`
    : null;

  return (
    <LayoutShell>
      <ArticleSchema
        title={article.title}
        description={article.description}
        slug={article.slug}
        datePublished={article.date}
        dateModified={article.updatedAt}
        image={article.image}
        category={article.labelCategory}
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

            <p className={css.category}>{article.labelCategory}</p>

            <h1 className={css.title}>{article.title}</h1>

            <p className={css.lead}>
              {article.shortDescription || article.description}
            </p>

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
              <ReactMarkdown
                components={{
                  img: ({ src, alt }) => {
                    if (!src) return null;

                    return (
                      <span className={css.articleImage}>
                        <Image
                          src={src}
                          alt={alt || ''}
                          width={1200}
                          height={675}
                          sizes="(max-width: 767px) 100vw, 1200px"
                          loading="lazy"
                        />
                      </span>
                    );
                  },
                }}
              >
                {article.content}
              </ReactMarkdown>
            </article>
          </div>
        </Container>
      </div>
      {/* Author */}
      {author && <AuthorSection author={author} />}

      {/* Related articles */}
      <RelatedArticles articles={relatedArticles} />

      {course && courseHref && (
        <ArticleCourseBanner course={course} href={courseHref} />
      )}
    </LayoutShell>
  );
}

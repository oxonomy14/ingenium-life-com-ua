// src/app/webinars/[slug]/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getWebinarBySlug, getWebinarSlugs } from '@/lib/webinars';

import LayoutShell from '@/components/LayoutShell/LayoutShell';

import WebinarHero from '@/components/Webinar/WebinarHero/WebinarHero';
import WebinarMeta from '@/components/Webinar/WebinarMeta/WebinarMeta';
import WebinarContent from '@/components/Webinar/WebinarContent/WebinarContent';
/* 

import WebinarPricing from '@/components/Webinar/WebinarPricing/WebinarPricing';
import WebinarAuthor from '@/components/Webinar/WebinarAuthor/WebinarAuthor';
import WebinarChannel from '@/components/Webinar/WebinarChannel/WebinarChannel';
import WebinarCta from '@/components/Webinar/WebinarCta/WebinarCta';

import WebinarSchema from '@/components/Webinar/WebinarSchema/WebinarSchema';
import WebinarBreadcrumbSchema from '@/components/Webinar/WebinarBreadcrumbSchema/WebinarBreadcrumbSchema';
 */
type WebinarPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = getWebinarSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: WebinarPageProps): Promise<Metadata> {
  const { slug } = await params;

  const webinar = getWebinarBySlug(slug);

  if (!webinar) {
    return {};
  }

  const canonical = `/webinars/${webinar.slug}`;

  return {
    title: webinar.seoTitle || webinar.title,

    description: webinar.seoDescription || webinar.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: webinar.seoTitle || webinar.title,
      description: webinar.seoDescription || webinar.description,
      url: canonical,
      type: 'website',

      ...(webinar.image && {
        images: [
          {
            url: webinar.image,
            alt: webinar.imageAlt || webinar.title,
          },
        ],
      }),
    },

    twitter: {
      card: 'summary_large_image',
      title: webinar.seoTitle || webinar.title,
      description: webinar.seoDescription || webinar.description,

      ...(webinar.image && {
        images: [webinar.image],
      }),
    },
  };
}

export default async function WebinarPage({ params }: WebinarPageProps) {
  const { slug } = await params;

  const webinar = getWebinarBySlug(slug);

  if (!webinar) {
    notFound();
  }

  return (
    <LayoutShell>
      {/*  <WebinarSchema webinar={webinar} />
       */}
      {/*  <WebinarBreadcrumbSchema webinar={webinar} /> */}

      <WebinarHero webinar={webinar} />
      <WebinarMeta webinar={webinar} />
      <WebinarContent content={webinar.content} />

      {/* 

      

      <WebinarPricing webinar={webinar} />

      <WebinarAuthor />

      {webinar.channelWebinar && <WebinarChannel />}

      <WebinarCta webinar={webinar} /> */}
    </LayoutShell>
  );
}

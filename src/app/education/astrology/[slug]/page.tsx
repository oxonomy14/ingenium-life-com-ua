import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCourse, getCoursesByCategory } from '@/lib/courses';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import CourseHero from '@/components/Course/CourseHero/CourseHero';
import CourseMeta from '@/components/Course/CourseMeta/CourseMeta';
import CourseParts from '@/components/Course/CourseParts/CourseParts';
import CourseContent from '@/components/Course/CourseContent/CourseContent';
import CourseProgram from '@/components/Course/CourseProgram/CourseProgram';
import CoursePreviewLesson from '@/components/Course/CoursePreviewLesson/CoursePreviewLesson';
import CoursePricing from '@/components/Course/CoursePricing/CoursePricing';
import CourseAuthor from '@/components/Course/CourseAuthor/CourseAuthor';
import CourseCta from '@/components/Course/CourseCta/CourseCta';
import CourseSchema from '@/components/Course/CourseSchema/CourseSchema';
import CourseBreadcrumbSchema from '@/components/Course/CourseBreadcrumbSchema/CourseBreadcrumbSchema';

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const courses = getCoursesByCategory('astrology');

  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = getCourse('astrology', slug);

  if (!course) {
    return {};
  }

  const canonical = `/education/astrology/${course.slug}`;

  const ogImage = course.ogImage || course.image;

  const ogImageAlt = course.ogImageAlt || course.imageAlt || course.title;

  return {
    title: course.seoTitle || course.title,

    description: course.seoDescription || course.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: course.seoTitle || course.title,
      description: course.seoDescription || course.description,
      url: canonical,
      type: 'website',

      ...(ogImage && {
        images: [
          {
            url: ogImage,
            alt: ogImageAlt,
          },
        ],
      }),
    },

    twitter: {
      card: 'summary_large_image',
      title: course.seoTitle || course.title,
      description: course.seoDescription || course.description,

      ...(ogImage && {
        images: [
          {
            url: ogImage,
            alt: ogImageAlt,
          },
        ],
      }),
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = getCourse('astrology', slug);

  if (!course) {
    notFound();
  }

  return (
    <LayoutShell>
      <CourseSchema course={course} categorySlug="astrology" />

      <CourseBreadcrumbSchema
        course={course}
        categorySlug="astrology"
        categoryName="Астрологія"
      />
      <CourseHero course={course} />
      <CourseMeta course={course} />
      <CourseContent content={course.content} />
      <CourseParts course={course} />
      <CourseProgram course={course} />
      <CoursePreviewLesson course={course} />
      <CoursePricing course={course} />
      <CourseAuthor />
      <CourseCta course={course} />
    </LayoutShell>
  );
}

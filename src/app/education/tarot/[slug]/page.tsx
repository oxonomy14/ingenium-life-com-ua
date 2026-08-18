import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCourse, getCoursesByCategory } from '@/lib/courses';

import LayoutShell from '@/components/LayoutShell/LayoutShell';
import CourseHero from '@/components/Course/CourseHero/CourseHero';
import CourseMeta from '@/components/Course/CourseMeta/CourseMeta';
import CourseParts from '@/components/Course/CourseParts/CourseParts';
import CourseContent from '@/components/Course/CourseContent/CourseContent';
import CourseProgram from '@/components/Course/CourseProgram/CourseProgram';
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
  const courses = getCoursesByCategory('tarot');

  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = getCourse('tarot', slug);

  if (!course) {
    return {};
  }

  const canonical = `/education/tarot/${course.slug}`;

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

      ...(course.image && {
        images: [
          {
            url: course.image,
            alt: course.imageAlt || course.title,
          },
        ],
      }),
    },

    twitter: {
      card: 'summary_large_image',
      title: course.seoTitle || course.title,
      description: course.seoDescription || course.description,

      ...(course.image && {
        images: [course.image],
      }),
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = getCourse('tarot', slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      {' '}
      <LayoutShell>
        <CourseSchema course={course} categorySlug="tarot" />

        <CourseBreadcrumbSchema
          course={course}
          categorySlug="tarot"
          categoryName="Таро"
        />
        <CourseHero course={course} />
        <CourseMeta course={course} />
        <CourseContent content={course.content} />
        <CourseParts course={course} />
        <CourseProgram course={course} />
        <CoursePricing course={course} />
        <CourseAuthor />
        <CourseCta course={course} />
      </LayoutShell>
    </>
  );
}

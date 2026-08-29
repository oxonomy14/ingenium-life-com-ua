import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const coursesDirectory = path.join(process.cwd(), 'content/courses');

export type CoursePart = {
  title: string;
  lessons?: number;
  description?: string;
};

export type CourseFeature = {
  title: string;
  description?: string;
};

export type CoursePrice = {
  amount: number;
  currency: string;
  label?: string;
};

export type CoursePaymentOption = {
  id: string;

  title: string;
  description?: string;

  amount: number;
  currency: 'RUB' | 'UAH';

  payments?: number;

  badge?: string;
};

export type CoursePricingOption = {
  id: string;

  title: string;
  description?: string;

  badge?: string;

  features?: string[];

  consultationIncluded?: boolean;
  consultationDuration?: string;

  paymentOptions: CoursePaymentOption[];

  featured?: boolean;
};

export type CoursePricing = {
  title?: string;
  description?: string;

  options: CoursePricingOption[];
};

export type CourseProgramModule = {
  title: string;
  description?: string;
  lessons?: string[];
};

export type Course = {
  slug: string;

  title: string;
  subtitle?: string;

  description: string;
  shortDescription?: string;

  category: string;
  level?: string;
  categorySlug: string;

  image?: string;
  imageAlt?: string;
  ogImage?: string;
  ogImageAlt?: string;

  format?: string;
  language?: string;
  duration?: string;
  courseYear?: number;

  lessonCount?: number;
  lessonDuration?: string;

  certificate?: boolean;

  price?: CoursePrice;
  pricing?: CoursePricing;

  featured?: boolean;
  published?: boolean;
  order?: number;

  courseParts?: CoursePart[];
  features?: CourseFeature[];

  seoTitle?: string;
  seoDescription?: string;

  program?: CourseProgramModule[];

  content: string;
};

function getCategoryDirectory(category: string) {
  return path.join(coursesDirectory, category);
}

function parseCourse(
  filePath: string,
  fileName: string,
  category: string,
): Course {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);

  const fileSlug = fileName.replace(/\.md$/, '');

  return {
    slug: data.slug || fileSlug,

    title: data.title,
    subtitle: data.subtitle,

    description: data.description,
    shortDescription: data.shortDescription,

    category: data.category || category,
    level: data.level,
    categorySlug: data.categorySlug,

    image: data.image,
    imageAlt: data.imageAlt,
    ogImage: data.ogImage,
    ogImageAlt: data.ogImageAlt,

    format: data.format,
    duration: data.duration,
    courseYear: data.courseYear,

    lessonCount: data.lessonCount,
    lessonDuration: data.lessonDuration,

    certificate: data.certificate ?? false,

    price: data.price,
    pricing: data.pricing,

    featured: data.featured ?? false,
    published: data.published ?? true,
    order: data.order ?? 999,

    courseParts: data.courseParts || [],
    features: data.features || [],

    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,

    program: data.program || [],

    content,
  };
}

export function getCoursesByCategory(category: string): Course[] {
  const categoryDirectory = getCategoryDirectory(category);

  if (!fs.existsSync(categoryDirectory)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(categoryDirectory)
    .filter((fileName) => fileName.endsWith('.md'));

  return fileNames
    .map((fileName) => {
      const filePath = path.join(categoryDirectory, fileName);

      return parseCourse(filePath, fileName, category);
    })
    .filter((course) => course.published)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getCourse(category: string, slug: string): Course | null {
  const courses = getCoursesByCategory(category);

  return courses.find((course) => course.slug === slug) ?? null;
}

export function getFeaturedCourses(category?: string): Course[] {
  if (category) {
    return getCoursesByCategory(category).filter((course) => course.featured);
  }

  if (!fs.existsSync(coursesDirectory)) {
    return [];
  }

  const categories = fs.readdirSync(coursesDirectory).filter((name) => {
    const categoryPath = path.join(coursesDirectory, name);

    return fs.statSync(categoryPath).isDirectory();
  });

  return categories
    .flatMap((categoryName) => getCoursesByCategory(categoryName))
    .filter((course) => course.featured)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getAllCourses(): Course[] {
  if (!fs.existsSync(coursesDirectory)) {
    return [];
  }

  const categories = fs.readdirSync(coursesDirectory).filter((name) => {
    const categoryPath = path.join(coursesDirectory, name);

    return fs.statSync(categoryPath).isDirectory();
  });

  return categories
    .flatMap((categoryName) => getCoursesByCategory(categoryName))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

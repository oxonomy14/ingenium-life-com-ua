// src/types/webinar.ts

export type WebinarCategory = 'astrology' | 'tarot' | 'jungian-psychology';

export type WebinarPrice = {
  amount: number;
  currency: 'RUB' | 'UAH';
};

export type Webinars = {
  slug: string;

  title: string;
  subtitle?: string;

  description: string;
  shortDescription: string;

  seoTitle?: string;
  seoDescription?: string;

  category: WebinarCategory;
  labelCategory: string;

  image: string;
  imageAlt?: string;

  authorId?: string;

  format?: string;
  duration?: string;
  webinarYear?: number;

  price?: WebinarPrice;

  channelWebinar?: boolean;

  featured?: boolean;
  published?: boolean;
};

export type Webinar = Webinars & {
  content: string;
};

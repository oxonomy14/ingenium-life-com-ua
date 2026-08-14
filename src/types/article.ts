export type Articles = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  imageAlt?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  category: string;
  image?: string;
  imageAlt?: string;
  content: string;
};

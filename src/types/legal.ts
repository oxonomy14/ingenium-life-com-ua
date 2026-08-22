export type LegalSection = {
  title?: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalPageData = {
  slug: string;
  title: string;
  description: string;
  updatedAt?: string;
  sections: LegalSection[];
};

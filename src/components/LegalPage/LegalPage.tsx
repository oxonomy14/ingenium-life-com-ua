import Container from '@/components/Container/Container';

import type { LegalPageData } from '@/types/legal';

import css from './LegalPage.module.css';

type Props = {
  page: LegalPageData;
};

export default function LegalPage({ page }: Props) {
  return (
    <article className={css.page}>
      <Container>
        <div className={css.inner}>
          <header className={css.header}>
            <p className={css.eyebrow}>InGenium Life</p>

            <h1 className={css.title}>{page.title}</h1>

            <p className={css.description}>{page.description}</p>

            {page.updatedAt && (
              <p className={css.updated}>
                Последнее обновление: {page.updatedAt}
              </p>
            )}
          </header>

          <div className={css.content}>
            {page.sections.map((section, index) => (
              <section className={css.section} key={index}>
                {section.title && (
                  <h2 className={css.sectionTitle}>{section.title}</h2>
                )}

                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {section.items && (
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}

// src/components/PageInDevelopment/PageInDevelopment.tsx

import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './PageInDevelopment.module.css';

type PageInDevelopmentProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageInDevelopment({
  eyebrow = 'InGenium Life',
  title,
  description = 'Мы готовим эту страницу и скоро добавим сюда подробную информацию.',
}: PageInDevelopmentProps) {
  return (
    <main className={css.page}>
      <Container>
        <div className={css.content}>
          <span className={css.eyebrow}>{eyebrow}</span>

          <h1 className={css.title}>{title}</h1>

          <p className={css.description}>{description}</p>

          <div className={css.actions}>
            <Link href="/" className={css.primaryLink}>
              На главную
            </Link>

            <Link href="/articles" className={css.secondaryLink}>
              Читать статьи
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

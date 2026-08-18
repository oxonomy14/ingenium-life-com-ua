import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AuthorSection.module.css';

type ArticleAuthorProps = {
  author: {
    name: string;
    role: string;
    description: string;
    image: string;
    href?: string;
  };
};

export default function AuthorSection({ author }: ArticleAuthorProps) {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.photo}>
            <Image
              src={author.image}
              alt={author.name}
              fill
              sizes="112px"
              className={css.image}
            />
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор статьи</p>

            {author.href ? (
              <Link href={author.href} className={css.nameLink}>
                <h2 className={css.name}>{author.name}</h2>
              </Link>
            ) : (
              <h2 className={css.name}>{author.name}</h2>
            )}

            <p className={css.role}>{author.role}</p>

            <p className={css.description}>{author.description}</p>

            {author.href && (
              <Link href={author.href} className={css.more}>
                Об авторе
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

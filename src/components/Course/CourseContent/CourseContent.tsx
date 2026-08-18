import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Container from '@/components/Container/Container';

import css from './CourseContent.module.css';

type CourseContentProps = {
  content: string;
};

export default function CourseContent({ content }: CourseContentProps) {
  if (!content.trim()) {
    return null;
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.layout}>
          <article className={css.content}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        </div>
      </Container>
    </section>
  );
}

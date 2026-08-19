// src/components/Webinar/WebinarContent/WebinarContent.tsx

import ReactMarkdown from 'react-markdown';

import Container from '@/components/Container/Container';

import css from './WebinarContent.module.css';

type WebinarContentProps = {
  content: string;
};

export default function WebinarContent({ content }: WebinarContentProps) {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Container>
    </section>
  );
}

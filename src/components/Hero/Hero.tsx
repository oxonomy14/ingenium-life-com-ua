import css from './Hero.module.css';
import Container from '../Container/Container';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.content}>
          {/*   <p className={css.eyebrow}>InGenium Life</p> */}

          <h1 className={css.title}>Идеи для понимания себя и мира</h1>

          <p className={css.description}>
            Психология, мышление, символизм, культура, астрология и практики
            самопознания — в статьях, исследованиях и авторских материалах.
          </p>

          <div className={css.actions}>
            <Link href="/articles" className={css.primaryButton}>
              Читать статьи
            </Link>

            <Link href="/membership" className={css.secondaryButton}>
              О сообществе
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

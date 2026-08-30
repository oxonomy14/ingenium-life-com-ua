import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './CourseAuthor.module.css';

export default function CourseAuthor() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.visual}>
            <div className={css.imageWrapper}>
              <Image
                src="/images/about/pavel-dementiev.webp"
                alt="Павло Дементьєв — автор і викладач InGenium"
                fill
                sizes="(max-width: 767px) 100vw, 420px"
                className={css.image}
              />
            </div>
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор курсу</p>

            <h2 className={css.title}>Павло Дементьєв</h2>

            <p className={css.lead}>
              Автор освітнього проєкту InGenium і викладач курсів.
            </p>

            <p className={css.description}>
              В основі навчання — системний підхід, практика та розуміння
              взаємозв’язків між елементами натальної карти замість механічного
              запам’ятовування готових трактувань.
            </p>

            <Link href="/about" className={css.link}>
              Докладніше про автора
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

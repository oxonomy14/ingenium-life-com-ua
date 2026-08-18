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
                alt="Павел Дементьев — автор и преподаватель InGenium"
                fill
                sizes="(max-width: 767px) 100vw, 420px"
                className={css.image}
              />
            </div>
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор курса</p>

            <h2 className={css.title}>Павел Дементьев</h2>

            <p className={css.lead}>
              Автор образовательного проекта InGenium и преподаватель курсов по
              астрологии.
            </p>

            <p className={css.description}>
              В основе обучения — системный подход, практика и понимание
              взаимосвязей между элементами натальной карты вместо механического
              запоминания готовых трактовок.
            </p>

            <Link href="/about" className={css.link}>
              Подробнее об авторе
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

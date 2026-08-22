import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './EducationAuthor.module.css';

export default function EducationAuthor() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.imageWrapper}>
            <Image
              src="/images/author/pavel-dementiev.webp"
              alt="Павел Дементьев — автор проекта InGenium"
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
              className={css.image}
            />
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор программ</p>

            <h2 className={css.title}>Павел Дементьев</h2>

            <p className={css.lead}>
              Автор проекта InGenium и образовательных программ по астрологии,
              Таро и психологическим направлениям.
            </p>

            <div className={css.text}>
              <p>
                В основе обучения — системный подход, в котором важно не
                запоминание отдельных трактовок, а понимание принципов,
                взаимосвязей и внутренней логики изучаемой дисциплины.
              </p>

              <p>
                Программы создаются так, чтобы знания можно было постепенно
                выстраивать в целостную систему и применять самостоятельно на
                практике.
              </p>
            </div>

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

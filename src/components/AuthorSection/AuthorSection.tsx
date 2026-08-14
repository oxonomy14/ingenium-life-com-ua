import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import css from './AuthorSection.module.css';

export default function AuthorSection() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.imageWrapper}>
            <Image
              src="/images/about/pavel-dementiev.webp"
              alt="Павел Дементьев — автор проекта InGenium"
              width={720}
              height={860}
              className={css.image}
            />
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор проекта</p>

            <h2 className={css.title}>
              Павел Дементьев
              <span> — автор InGenium</span>
            </h2>

            <div className={css.text}>
              <p>
                InGenium — авторский образовательный проект, в основе которого
                системный подход к изучению астрологии, Таро, психологии и
                человека.
              </p>

              <p>
                В программах внимание уделяется не механическому запоминанию
                трактовок, а пониманию принципов, взаимосвязей и развитию
                самостоятельного мышления.
              </p>

              <p>
                Помимо образовательных программ, Павел проводит авторские
                вебинары и встречи, посвящённые вопросам культуры, мышления,
                мировоззрения и понимания человека.
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

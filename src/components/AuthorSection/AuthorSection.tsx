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
              alt="Павло Дементьєв — автор проєкту InGenium"
              width={720}
              height={860}
              className={css.image}
            />
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Автор проєкту</p>

            <h2 className={css.title}>
              Павло Дементьєв
              <span> — автор InGenium</span>
            </h2>

            <div className={css.text}>
              <p>
                InGenium — авторський освітній проєкт, в основі якого лежить
                системний підхід до вивчення астрології, Таро, психології та
                людини.
              </p>

              <p>
                У програмах увага приділяється не механічному
                запам&apos;ятовуванню трактувань, а розумінню принципів,
                взаємозв&apos;язків і розвитку самостійного мислення.
              </p>

              <p>
                Окрім освітніх програм, Павло проводить авторські вебінари та
                зустрічі, присвячені питанням культури, мислення, світогляду й
                розуміння людини.
              </p>
            </div>

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

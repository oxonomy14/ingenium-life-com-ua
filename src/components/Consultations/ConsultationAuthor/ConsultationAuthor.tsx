import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';
import { siteConfig } from '@/config/site';

import css from './ConsultationAuthor.module.css';

export default function ConsultationAuthor() {
  const founder = siteConfig.organization.founder;

  return (
    <section className={css.section}>
      <Container>
        <div className={css.card}>
          <div className={css.imageWrap}>
            <Image
              src={founder.image}
              alt={founder.name}
              width={520}
              height={640}
              className={css.image}
              sizes="(max-width: 767px) 100vw, 420px"
            />
          </div>

          <div className={css.content}>
            <p className={css.eyebrow}>Консультации проводит</p>

            <h2 className={css.title}>{founder.name}</h2>

            <p className={css.lead}>
              Астролог, преподаватель и автор образовательных программ InGenium.
            </p>

            <div className={css.text}>
              <p>
                В консультационной работе основное внимание уделяется не
                отдельным положениям планет, а целостной структуре натальной
                карты и тому, как её показатели проявляются в реальной жизни.
              </p>

              <p>
                Задача консультации — помочь лучше понять собственные сильные
                стороны, повторяющиеся сценарии, ограничения и возможные
                направления дальнейшего движения.
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

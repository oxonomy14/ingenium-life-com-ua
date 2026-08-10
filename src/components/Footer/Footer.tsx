import React from 'react';
import Link from 'next/link';
import Container from '@/components/Container/Container';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.top}>
          <div className={css.brand}>
            <Link href="/" className={css.logo}>
              InGenium
            </Link>

            <p className={css.description}>
              Авторский журнал о человеке, психологии, культуре, символах и
              различных системах понимания личности.
            </p>
          </div>

          <nav className={css.nav} aria-label="Навигация в подвале">
            <div className={css.navGroup}>
              <p className={css.navTitle}>Журнал</p>

              <Link href="/articles">Статьи</Link>
              <Link href="/topics">Темы</Link>
              <Link href="/webinars">Вебинары</Link>
              <Link href="/about">О проекте</Link>
            </div>

            <div className={css.navGroup}>
              <p className={css.navTitle}>InGenium</p>

              <Link href="/membership">Подписка</Link>
              <a
                href="https://ingenium-life.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                ingenium-life.ru
              </a>

              <a
                href="https://ingenium-life.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                ingenium-life.org
              </a>
            </div>
          </nav>

          <div className={css.community}>
            <p className={css.eyebrow}>Закрытый InGenium</p>

            <h2 className={css.communityTitle}>
              Больше материалов.
              <br />
              Больше глубины.
            </h2>

            <p className={css.communityText}>
              Авторские публикации, вебинары, разборы и материалы для участников
              сообщества.
            </p>

            <Link href="/membership" className={css.communityLink}>
              Узнать о подписке
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={css.bottom}>
          <p className={css.copyright}>© {new Date().getFullYear()} InGenium</p>

          <div className={css.legal}>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/terms">Условия использования</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

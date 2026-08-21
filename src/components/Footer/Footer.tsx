import Link from 'next/link';
import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

import Container from '@/components/Container/Container';
import { siteConfig } from '@/config/site';

import css from './Footer.module.css';

export default function Footer() {
  const { social } = siteConfig;

  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.top}>
          <div className={css.brand}>
            <Link href="/" className={css.logo}>
              <span className={css.logoMark}>In</span>
              <span className={css.logoText}>{siteConfig.name}</span>
            </Link>

            <p className={css.description}>
              Авторский образовательный проект об астрологии, Таро, психологии и
              системном изучении человека.
            </p>

            <div className={css.socials}>
              {social.telegram && (
                <a
                  href={social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className={css.socialLink}
                >
                  <FaTelegramPlane />
                </a>
              )}

              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={css.socialLink}
                >
                  <FaYoutube />
                </a>
              )}

              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={css.socialLink}
                >
                  <FaInstagram />
                </a>
              )}

              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={css.socialLink}
                >
                  <FaFacebookF />
                </a>
              )}
            </div>

            {/*
            <div className={css.languages}>
              <Link href="/" className={css.languageActive}>
                RU
              </Link>

              <Link href="/uk" className={css.language}>
                UA
              </Link>
            </div>
            */}
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>Обучение</p>

            <nav className={css.links}>
              <Link href="/education">Все программы</Link>
              <Link href="/education/astrology">Астрология</Link>
              <Link href="/education/tarot">Таро</Link>
              <Link href="/education/jungian-psychology">
                Юнгианская психология
              </Link>
              <Link href="/education/webinars">Вебинары</Link>
            </nav>
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>Материалы</p>

            <nav className={css.links}>
              <Link href="/articles">Статьи</Link>
              <Link href="/articles/category/astrology">Об астрологии</Link>
              <Link href="/articles/category/tarot">О Таро</Link>
              <Link href="/articles/category/jungian-psychology">
                О психологии
              </Link>
              <Link href="/reviews">Отзывы</Link>
            </nav>
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>InGenium</p>

            <nav className={css.links}>
              <Link href="/about">О проекте</Link>

              <a href="/closed-channel">Закрытый InGenium ↗</a>

              <Link href="/contacts">Контакты</Link>
            </nav>
          </div>
        </div>

        <div className={css.bottom}>
          <p className={css.copyright}>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <div className={css.legal}>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/terms">Условия использования</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

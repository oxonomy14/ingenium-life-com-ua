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
              Авторський освітній проєкт про астрологію, Таро, психологію та
              системне вивчення людини.
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
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>Навчання</p>

            <nav className={css.links}>
              <Link href="/education">Усі програми</Link>
              <Link href="/education/astrology">Астрологія</Link>
              <Link href="/education/tarot">Таро</Link>
              <Link href="/education/jungian-psychology">
                Юнгіанська психологія
              </Link>
              <Link href="/education/webinars">Вебінари</Link>
            </nav>
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>Матеріали</p>

            <nav className={css.links}>
              <Link href="/articles">Статті</Link>
              <Link href="/articles/category/astrology">Про астрологію</Link>
              <Link href="/articles/category/tarot">Про Таро</Link>
              <Link href="/articles/category/jungian-psychology">
                Про психологію
              </Link>
              <Link href="/reviews">Відгуки</Link>
            </nav>
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>InGenium</p>

            <nav className={css.links}>
              <Link href="/about">Про проєкт</Link>
              <Link href="/closed-channel">Закритий InGenium ↗</Link>
              <Link href="/contacts">Контакти</Link>
            </nav>
          </div>
        </div>

        <div className={css.bottom}>
          <p className={css.copyright}>
            © {new Date().getFullYear()} InGenium Life CO., LTD.
          </p>

          <div className={css.legal}>
            <Link href="/confpolicy">Політика конфіденційності</Link>
            <Link href="/terms">Умови використання</Link>
            <Link href="/oferta">Публічна оферта</Link>
            <Link href="/refund-policy">Політика повернення коштів</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

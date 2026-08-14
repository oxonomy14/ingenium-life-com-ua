import Link from 'next/link';
import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

import Container from '@/components/Container/Container';

import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.top}>
          <div className={css.brand}>
            <Link href="/" className={css.logo}>
              <span className={css.logoMark}>In</span>
              <span className={css.logoText}>InGenium Life</span>
            </Link>

            <p className={css.description}>
              Авторский образовательный проект об астрологии, Таро, психологии и
              системном изучении человека.
            </p>

            <div className={css.socials}>
              <a
                href="..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className={css.socialLink}
              >
                <FaTelegramPlane />
              </a>

              <a
                href="..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={css.socialLink}
              >
                <FaYoutube />
              </a>

              <a
                href="..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={css.socialLink}
              >
                <FaInstagram />
              </a>

              <a
                href="..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={css.socialLink}
              >
                <FaFacebookF />
              </a>
            </div>

            <div className={css.languages}>
              <Link href="/" className={css.languageActive}>
                RU
              </Link>

              <Link href="/uk" className={css.language}>
                UA
              </Link>
            </div>
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>Обучение</p>

            <nav className={css.links}>
              <Link href="/education">Все программы</Link>
              <Link href="/education/astrology">Астрология</Link>
              <Link href="/education/tarot">Таро</Link>
              <Link href="/education/psychology">Психология</Link>
              <Link href="/webinars">Вебинары</Link>
            </nav>
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>Материалы</p>

            <nav className={css.links}>
              <Link href="/articles">Статьи</Link>
              <Link href="/articles/category/astrology">Об астрологии</Link>
              <Link href="/articles/category/tarot">О Таро</Link>
              <Link href="/articles/category/psychology">О психологии</Link>
              <Link href="/reviews">Отзывы</Link>
            </nav>
          </div>

          <div className={css.column}>
            <p className={css.columnTitle}>InGenium</p>

            <nav className={css.links}>
              <Link href="/about">О проекте</Link>

              <a
                href="https://ingenium-life.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Закрытый InGenium ↗
              </a>

              <Link href="/contacts">Контакты</Link>
            </nav>
          </div>
        </div>

        <div className={css.bottom}>
          <p className={css.copyright}>
            © {new Date().getFullYear()} InGenium Life
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

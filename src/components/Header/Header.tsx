'use client';

import { useState } from 'react';
import Link from 'next/link';

import Container from '@/components/Container/Container';
import MobileMenu from './MobileMenu';

import css from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          {/* Logo */}

          <Link href="/" className={css.logo} onClick={closeMobileMenu}>
            <span className={css.logoMark}>In</span>

            <span className={css.logoText}>InGenium</span>
          </Link>

          {/* Desktop navigation */}

          <nav className={css.nav}>
            <Link href="/articles" className={css.navLink}>
              Статьи
            </Link>

            {/* Education dropdown */}

            <div className={css.navDropdown}>
              <Link href="/education" className={css.navLink}>
                Обучение
              </Link>

              <div className={css.dropdown}>
                <div className={css.dropdownInner}>
                  <p className={css.dropdownLabel}>Курсы</p>

                  <Link href="/education/astrology">Астрология</Link>

                  <Link href="/education/tarot">Таро</Link>

                  <Link href="/education/jungian-psychology">
                    Юнгианская психология
                  </Link>

                  <div className={css.dropdownDivider} />

                  <p className={css.dropdownLabel}>Отдельные занятия</p>

                  <Link href="/education/webinars">Все вебинары</Link>
                </div>
              </div>
            </div>

            <Link href="/consultations" className={css.navLink}>
              Консультации
            </Link>

            <Link href="/about" className={css.navLink}>
              О проекте
            </Link>
          </nav>

          {/* Actions */}

          <div className={css.actions}>
            {/* Languages */}

            <div className={css.languages}>
              <Link
                href="/"
                className={`${css.language} ${css.languageActive}`}
              >
                RU
              </Link>

              <span className={css.languageDivider}>/</span>

              <Link href="/ua" className={css.language}>
                UA
              </Link>
            </div>

            {/* Contacts dropdown */}

            <div className={css.contactDropdown}>
              <button
                className={css.contactButton}
                type="button"
                aria-label="Открыть контакты"
              >
                Связаться
              </button>

              <div className={css.contactMenu}>
                <a
                  href="https://t.me/USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>

                <a
                  href="https://wa.me/380XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>

                <a href="tel:+380XXXXXXXXX">+380 XX XXX XX XX</a>

                <div className={css.contactDivider} />

                <Link href="/contacts" className={css.allContacts}>
                  Все контакты →
                </Link>
              </div>
            </div>

            {/* Mobile burger */}

            <button
              className={`${css.menuButton} ${
                isMenuOpen ? css.menuButtonActive : ''
              }`}
              type="button"
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}

        <MobileMenu isOpen={isMenuOpen} onClose={closeMobileMenu} />
      </Container>
    </header>
  );
}

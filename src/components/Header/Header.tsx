'use client';

import { useState } from 'react';
import Link from 'next/link';

import Container from '@/components/Container/Container';
import { siteConfig } from '@/config/site';

import MobileMenu from './MobileMenu';

import css from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const { contacts } = siteConfig;

  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          {/* Logo Image*/}

          <Link href="/" className={css.logo} onClick={closeMobileMenu}>
            <span className={css.logoMark}>In</span>

            <span className={css.logoText}>{siteConfig.name}</span>
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
                {/* Client manager */}

                {contacts.clientManager && (
                  <a
                    href={contacts.clientManager}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Написать менеджеру
                  </a>
                )}

                {/* Telegram */}

                {contacts.telegram && (
                  <a
                    href={contacts.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                )}

                {contacts.phone && (
                  <a
                    href={`tel:${contacts.phone.replace(/\s/g, '')}`}
                    className={css.contactValue}
                  >
                    {contacts.phoneLabel || contacts.phone}
                  </a>
                )}

                {contacts.email && (
                  <a
                    href={`mailto:${contacts.email}`}
                    className={`${css.contactValue} ${css.contactEmail}`}
                  >
                    {contacts.email}
                  </a>
                )}

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

        <MobileMenu isOpen={isMenuOpen} onClose={closeMobileMenu} />
      </Container>
    </header>
  );
}

'use client';

import Image from 'next/image';
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
          <Link
            href="/"
            className={css.logo}
            onClick={closeMobileMenu}
            aria-label="InGenium Life — головна"
          >
            <Image
              src={siteConfig.organization.logo}
              alt=""
              width={48}
              height={48}
              priority
              className={css.logoImage}
            />

            <span className={css.logoText}>{siteConfig.name}</span>
          </Link>

          <nav className={css.nav}>
            <Link href="/articles" className={css.navLink}>
              Статті
            </Link>

            <div className={css.navDropdown}>
              <Link href="/education" className={css.navLink}>
                Навчання
              </Link>

              <div className={css.dropdown}>
                <div className={css.dropdownInner}>
                  <p className={css.dropdownLabel}>Курси</p>

                  <Link href="/education/astrology">Астрологія</Link>

                  <Link href="/education/tarot">Таро</Link>

                  <Link href="/education/jungian-psychology">
                    Юнгіанська психологія
                  </Link>

                  <div className={css.dropdownDivider} />

                  <p className={css.dropdownLabel}>Окремі заняття</p>

                  <Link href="/education/webinars">Усі вебінари</Link>
                </div>
              </div>
            </div>

            <Link href="/consultations" className={css.navLink}>
              Консультації
            </Link>

            <Link href="/about" className={css.navLink}>
              Про проєкт
            </Link>
          </nav>

          <div className={css.actions}>
            <div className={css.contactDropdown}>
              <button
                className={css.contactButton}
                type="button"
                aria-label="Відкрити контакти"
              >
                Зв’язатися
              </button>

              <div className={css.contactMenu}>
                {contacts.clientManager && (
                  <a
                    href={contacts.clientManager}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Написати менеджеру
                  </a>
                )}

                {contacts.telegram && (
                  <a
                    href={contacts.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                )}
                {contacts.whatsapp && (
                  <a
                    href={contacts.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whatsapp
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
                  Усі контакти →
                </Link>
              </div>
            </div>

            <button
              className={`${css.menuButton} ${
                isMenuOpen ? css.menuButtonActive : ''
              }`}
              type="button"
              aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
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

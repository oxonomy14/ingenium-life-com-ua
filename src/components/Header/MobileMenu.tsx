'use client';

import { useState } from 'react';
import Link from 'next/link';

import css from './MobileMenu.module.css';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const handleClose = () => {
    setIsEducationOpen(false);
    onClose();
  };

  return (
    <div
      id="mobile-menu"
      className={`${css.menu} ${isOpen ? css.menuOpen : ''}`}
    >
      <div className={css.inner}>
        <nav className={css.nav}>
          <Link href="/articles" className={css.navLink} onClick={handleClose}>
            Статьи
          </Link>

          <div className={css.group}>
            <button
              className={css.navButton}
              type="button"
              aria-expanded={isEducationOpen}
              onClick={() => setIsEducationOpen((prev) => !prev)}
            >
              <span>Обучение</span>

              <span
                className={`${css.arrow} ${
                  isEducationOpen ? css.arrowOpen : ''
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`${css.subnav} ${
                isEducationOpen ? css.subnavOpen : ''
              }`}
            >
              <div className={css.subnavInner}>
                <Link href="/education" onClick={handleClose}>
                  Все обучение
                </Link>

                <Link href="/education/astrology" onClick={handleClose}>
                  Астрология
                </Link>

                <Link href="/education/tarot" onClick={handleClose}>
                  Таро
                </Link>

                <Link
                  href="/education/jungian-psychology"
                  onClick={handleClose}
                >
                  Юнгианская психология
                </Link>

                <Link href="/education/webinars" onClick={handleClose}>
                  Отдельные занятия
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/consultations"
            className={css.navLink}
            onClick={handleClose}
          >
            Консультации
          </Link>

          <Link href="/about" className={css.navLink} onClick={handleClose}>
            О проекте
          </Link>
        </nav>

        <div className={css.footer}>
          <p className={css.label}>Связаться</p>

          <div className={css.contacts}>
            <a href="https://t.me/USERNAME" target="_blank" rel="noreferrer">
              Telegram
            </a>

            <a
              href="https://wa.me/380XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="tel:+380XXXXXXXXX">+380 XX XXX XX XX</a>
          </div>

          <Link
            href="/contacts"
            className={css.contactsLink}
            onClick={handleClose}
          >
            Все контакты →
          </Link>

          <div className={css.languages}>
            <Link href="/" className={css.languageActive} onClick={handleClose}>
              Русский
            </Link>

            <Link href="/ua" onClick={handleClose}>
              Українська
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

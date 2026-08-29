'use client';

import { useState } from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

import css from './MobileMenu.module.css';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const { contacts } = siteConfig;

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
            Статті
          </Link>

          <div className={css.group}>
            <button
              className={css.navButton}
              type="button"
              aria-expanded={isEducationOpen}
              onClick={() => setIsEducationOpen((prev) => !prev)}
            >
              <span>Навчання</span>

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
                  Усе навчання
                </Link>

                <Link href="/education/astrology" onClick={handleClose}>
                  Астрологія
                </Link>

                <Link href="/education/tarot" onClick={handleClose}>
                  Таро
                </Link>

                <Link
                  href="/education/jungian-psychology"
                  onClick={handleClose}
                >
                  Юнгіанська психологія
                </Link>

                <Link href="/education/webinars" onClick={handleClose}>
                  Окремі заняття
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/consultations"
            className={css.navLink}
            onClick={handleClose}
          >
            Консультації
          </Link>

          <Link href="/about" className={css.navLink} onClick={handleClose}>
            Про проєкт
          </Link>
        </nav>

        <div className={css.footer}>
          <p className={css.label}>Зв’язатися</p>

          <div className={css.contacts}>
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
              <a href={`tel:${contacts.phone.replace(/\s/g, '')}`}>
                {contacts.phoneLabel || contacts.phone}
              </a>
            )}

            {contacts.email && (
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            )}
          </div>

          <Link
            href="/contacts"
            className={css.contactsLink}
            onClick={handleClose}
          >
            Усі контакти →
          </Link>
        </div>
      </div>
    </div>
  );
}

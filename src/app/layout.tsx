import React from 'react';

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';

import 'modern-normalize/modern-normalize.css';
import '../styles/globals.css';

import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'InGenium Life — пространство знаний и идей',
    template: '%s | Ingenium Life',
  },

  description:
    'Авторский проект о человеке и мире: психология, мышление, символизм, развитие и практические знания для осознанной жизни.',

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
  },

  openGraph: {
    type: 'website',
    siteName: 'Ingenium Life',
    title: 'InGenium Life — знания для осознанной жизни',
    description:
      'Пространство знаний и идей о человеке, мышлении, развитии и современном мире.',
    images: [
      {
        url: '/images/ogImage/ogMain.webp',
        width: 1200,
        height: 630,
        alt: 'Ingenium Life',
      },
    ],
    locale: 'ru_RU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'InGenium Life — знания для осознанной жизни',
    description:
      'Пространство знаний и идей о человеке, мышлении, развитии и современном мире.',
    images: ['/images/ogImage/ogMain.webp'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="wrapper">{children}</body>
    </html>
  );
}

import React from 'react';
import type { Metadata } from 'next';

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

import OrganizationSchema from '@/components/Seo/OrganizationSchema/OrganizationSchema';
import WebSiteSchema from '@/components/Seo/WebSiteSchema/WebSiteSchema';
import PersonSchema from '@/components/Seo/PersonSchema/PersonSchema';

import { GoogleAnalytics } from '@next/third-parties/google';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'InGenium — школа астрологии и образовательный проект',
    template: '%s | InGenium',
  },

  description:
    'InGenium — образовательный проект об астрологии. Онлайн-курсы, вебинары, статьи и авторские материалы Павла Дементьева.',

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
  },

  openGraph: {
    type: 'website',
    siteName: 'InGenium',
    title: 'InGenium — школа астрологии и образовательный проект',
    description:
      'Онлайн-курсы, вебинары, статьи и авторские материалы об астрологии.',
    images: [
      {
        url: '/images/ogImage/ogMain.webp',
        width: 1200,
        height: 630,
        alt: 'InGenium — школа астрологии',
      },
    ],
    locale: 'ru_RU',
    alternateLocale: ['uk_UA'],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'InGenium — школа астрологии и образовательный проект',
    description:
      'Онлайн-курсы, вебинары, статьи и авторские материалы об астрологии.',
    images: ['/images/ogImage/ogMain.webp'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <OrganizationSchema />
        <PersonSchema />
        <WebSiteSchema />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}

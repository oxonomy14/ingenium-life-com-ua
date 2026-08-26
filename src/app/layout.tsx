import React from 'react';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';

import 'modern-normalize/modern-normalize.css';
import '../styles/globals.css';

import OrganizationSchema from '@/components/Seo/OrganizationSchema/OrganizationSchema';
import WebSiteSchema from '@/components/Seo/WebSiteSchema/WebSiteSchema';
import PersonSchema from '@/components/Seo/PersonSchema/PersonSchema';

import { GoogleAnalytics } from '@next/third-parties/google';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ingenium-life.com.ua';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'InGenium — школа астрології та освітній проєкт',
    template: '%s | InGenium',
  },

  description:
    'InGenium — освітній проєкт про астрологію. Онлайн-курси, вебінари, статті та авторські матеріали Павла Дементьєва.',

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

    title: 'InGenium — школа астрології та освітній проєкт',

    description:
      'Онлайн-курси, вебінари, статті та авторські матеріали про астрологію.',

    images: [
      {
        url: '/images/ogImage/ogMain.webp',
        width: 1200,
        height: 630,
        alt: 'InGenium — школа астрології',
      },
    ],

    locale: 'uk_UA',
    alternateLocale: ['ru_RU'],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'InGenium — школа астрології та освітній проєкт',

    description:
      'Онлайн-курси, вебінари, статті та авторські матеріали про астрологію.',

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
    <html lang="uk">
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        <OrganizationSchema />
        <PersonSchema />
        <WebSiteSchema />

        {children}

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}

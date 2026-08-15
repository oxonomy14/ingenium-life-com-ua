// src/config/site.ts

export const siteConfig = {
  name: 'InGenium Life',

  url: 'https://ingenium-life.com.ua',

  description:
    'Образовательный проект об астрологии, Таро, психологии и развитии человека.',

  language: 'ru',
  locale: 'ru_UA',

  organization: {
    name: 'InGenium Life',
    legalName: 'InGenium Life',

    founder: {
      name: 'Павел Дементьев',
      id: 'pavel-dementiev',
      image: '/images/author/pavel-dementiev.webp',
    },

    logo: '/images/logo.png',
  },

  contacts: {
    email: 'info@ingenium-life.com.ua',
    telegram: '',
  },

  social: {
    telegram: '',
    instagram: '',
    facebook: '',
    youtube: '',
  },
} as const;

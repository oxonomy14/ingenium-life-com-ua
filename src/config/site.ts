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

    // Если захотим выводить публичный телефон
    phone: '+380 94 490-75-26',
    phoneLabel: '',

    // Прямой контакт в Telegram
    telegram: '',

    // Telegram-бот для общения с клиентами
    clientManager: '',
  },

  social: {
    // Публичные соцсети проекта
    telegram: 'https://t.me/ingenium_life',
    instagram: 'https://www.instagram.com/ingenium_lifepro/',
    facebook: 'https://www.facebook.com/ingeniumlife/',
    youtube: '',
  },
} as const;

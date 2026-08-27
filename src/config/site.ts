// src/config/site.ts

export const siteConfig = {
  name: 'InGenium Life',

  url: 'https://ingenium-life.com.ua',

  description:
    'Освітній проєкт про астрологію, Таро, психологію та розвиток людини.',

  language: 'uk',
  locale: 'uk_UA',

  organization: {
    name: 'InGenium Life',
    legalName: 'InGenium Life',

    founder: {
      name: 'Павло Дементьєв',
      id: 'pavel-dementiev',
      image: '/images/author/pavel-dementiev.webp',
    },

    logo: '/images/logo.png',
  },

  contacts: {
    email: 'hello@ingenium-life.com.ua',

    // Якщо захочемо показувати публічний телефон
    phone: '+380 94 490-75-26',
    phoneLabel: '',

    // Прямий контакт у Telegram
    telegram: 'https://t.me/ingenium_support',

    // Telegram-бот для спілкування з клієнтами
    clientManager: '',
  },

  social: {
    // Публічні соцмережі проєкту
    telegram: 'https://t.me/ingenium_life',
    instagram: 'https://www.instagram.com/ingenium_lifepro/',
    facebook: 'https://www.facebook.com/ingeniumlife/',
    youtube: '',
  },
} as const;

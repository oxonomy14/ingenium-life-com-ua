// lighthouserc.cjs

module.exports = {
  ci: {
    collect: {
      url: [
        // Главная
        'https://ingenium-life.com.ua/',

        // Статьи
        'https://ingenium-life.com.ua/articles',
        'https://ingenium-life.com.ua/articles/category/astrology',
        'https://ingenium-life.com.ua/articles/category/tarot',
        'https://ingenium-life.com.ua/articles/category/jungian-psychology',

        // Одна отдельная статья

        'https://ingenium-life.com.ua/articles/kompleksy-i-arhetipy',

        // Обучение
        'https://ingenium-life.com.ua/education',
        'https://ingenium-life.com.ua/education/astrology',
        'https://ingenium-life.com.ua/education/tarot',
        'https://ingenium-life.com.ua/education/jungian-psychology',
        'https://ingenium-life.com.ua/education/webinars',
        'https://ingenium-life.com.ua/education/free',

        // Другие основные страницы
        'https://ingenium-life.com.ua/consultations',
        'https://ingenium-life.com.ua/reviews',
        'https://ingenium-life.com.ua/closed-channel',
        'https://ingenium-life.com.ua/about',
        'https://ingenium-life.com.ua/contacts',

        // Один реальный курс
        'https://ingenium-life.com.ua/education/astrology/natal-astrology-v2',

        // Один реальный вебинар
        'https://ingenium-life.com.ua/education/webinars/astromagiya-solntsa-i-lva',
      ],

      numberOfRuns: 3,

      settings: {
        formFactor: 'mobile',

        screenEmulation: {
          mobile: true,
          width: 412,
          height: 823,
          deviceScaleFactor: 1.75,
          disabled: false,
        },

        throttling: {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
          requestLatencyMs: 150,
          downloadThroughputKbps: 1474.56,
          uploadThroughputKbps: 675,
        },
      },
    },

    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1 }],

        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
      },
    },

    upload: {
      target: 'temporary-public-storage',
    },
  },
};

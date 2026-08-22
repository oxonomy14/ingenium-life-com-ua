# InGenium Life

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
[![Lighthouse CI](https://img.shields.io/badge/Lighthouse-CI-F44B21?logo=lighthouse)](https://github.com/GoogleChrome/lighthouse-ci)

Официальный сайт образовательного проекта **InGenium Life**.

Проект посвящён обучению и публикации материалов по астрологии, Таро, юнгианской психологии и смежным направлениям.

**Production:** https://ingenium-life.com.ua/

---

## О проекте

Сайт разработан на **Next.js** как замена предыдущей версии проекта на Tilda.

Основные задачи миграции:

- сохранить существующую органическую выдачу;
- сохранить индексируемые URL;
- улучшить техническое SEO;
- повысить производительность и Core Web Vitals;
- создать масштабируемую архитектуру;
- разделить данные, контент и UI;
- добавить украинскую версию сайта;
- обеспечить удобное дальнейшее развитие проекта.

Основной язык существующего сайта — **русский**.

В дальнейшем предусмотрена полноценная **украинская локализация** с отдельными URL, canonical и `hreflang`.

---

# Tech Stack

- **Next.js 16**
- **React**
- **TypeScript**
- **CSS Modules**
- **Markdown**
- **React Markdown**
- **Schema.org / JSON-LD**
- **Google Analytics 4**
- **Google Lighthouse**
- **Lighthouse CI**
- **Vercel**

Основная часть сайта строится с использованием Server Components и статической генерации там, где это возможно.

---

# Структура сайта

## Статьи

```text
/articles
/articles/[slug]

/articles/category/astrology
/articles/category/tarot
/articles/category/jungian-psychology
```

Статьи хранятся в Markdown:

```text
content/
└── articles/
    ├── astrology/
    ├── tarot/
    └── jungian-psychology/
```

Markdown содержит frontmatter с данными статьи:

```yaml
---
title:
description:
shortDescription:
date:
updatedAt:
category:
labelCategory:
image:
imageAlt:
authorId:
---
```

На основе этих данных генерируются:

- страницы статей;
- карточки;
- категории;
- metadata;
- Open Graph;
- sitemap;
- JSON-LD.

---

# Обучение

Основные разделы:

```text
/education
/education/astrology
/education/tarot
/education/jungian-psychology
/education/webinars
/education/free
```

Раздел объединяет курсы, вебинары и бесплатные образовательные материалы.

---

# Курсы

Курсы имеют отдельные страницы и централизованную структуру данных.

Пример:

```text
/education/astrology/natal-astrology-v2
```

Данные курса могут использоваться одновременно:

- на странице курса;
- в каталоге;
- в карточках;
- в sitemap;
- в JSON-LD;
- во внутренних рекомендациях.

---

# Вебинары

```text
/education/webinars
/education/webinars/[slug]
```

Данные вебинара могут включать:

- название;
- описание;
- программу;
- категорию;
- автора;
- год;
- формат доступа;
- материалы;
- стоимость;
- SEO metadata.

---

# SEO

SEO является одним из основных архитектурных требований проекта.

## Metadata

Каждая индексируемая страница должна иметь:

```text
title
description
canonical
Open Graph
```

Для динамических страниц metadata генерируются из данных контента.

---

## Structured Data

Используется JSON-LD / Schema.org.

Поддерживаются или планируются:

```text
Organization
WebSite
Person
Article
Course
BreadcrumbList
FAQPage
AboutPage
```

Structured Data должны соответствовать реальному содержимому страницы.

---

## Sitemap

Sitemap генерируется через Next.js:

```text
src/app/sitemap.ts
```

В него входят:

- основные статические страницы;
- категории;
- статьи;
- курсы;
- вебинары.

При добавлении нового индексируемого раздела необходимо проверить, должен ли он быть добавлен в sitemap.

---

## Robots

Настройки поисковых роботов:

```text
src/app/robots.ts
```

Production sitemap:

```text
https://ingenium-life.com.ua/sitemap.xml
```

---

# SEO checklist для новых страниц

Перед публикацией новой индексируемой страницы необходимо проверить:

- [ ] уникальный `<title>`;
- [ ] уникальный `description`;
- [ ] корректный canonical URL;
- [ ] один основной `H1`;
- [ ] логичную структуру `H2 → H3`;
- [ ] человекочитаемый URL;
- [ ] breadcrumbs;
- [ ] внутренние ссылки;
- [ ] отсутствие битых ссылок;
- [ ] `alt` для значимых изображений;
- [ ] Open Graph metadata;
- [ ] подходящую JSON-LD Schema;
- [ ] наличие страницы в sitemap, если это необходимо;
- [ ] отсутствие случайного `noindex`;
- [ ] корректный HTTP status;
- [ ] мобильную версию;
- [ ] Lighthouse;
- [ ] отсутствие значительного ухудшения Core Web Vitals.

---

# SEO checklist при миграции URL

Особенно важно при переносе страниц с Tilda.

Если URL существовал и был проиндексирован:

- [ ] сохранить URL без изменений, если возможно;
- [ ] не менять slug без необходимости;
- [ ] при изменении URL настроить `301 redirect`;
- [ ] не создавать цепочки redirects;
- [ ] сохранить основную тематику страницы;
- [ ] проверить canonical;
- [ ] проверить внутренние ссылки;
- [ ] проверить sitemap;
- [ ] проверить статус старого URL после deployment.

Главный принцип:

> Существующая SEO-ценность URL не должна теряться из-за технической миграции.

---

# RU / UA

Русская версия сохраняется как основная существующая версия сайта для сохранения текущей поисковой выдачи.

Дополнительно планируется украинская локализация.

При реализации мультиязычности необходимо учитывать:

```html
<link rel="alternate" hreflang="ru-UA" ... />
<link rel="alternate" hreflang="uk-UA" ... />
<link rel="alternate" hreflang="x-default" ... />
```

Каждая языковая версия должна иметь собственный canonical.

---

# Performance

Производительность контролируется с помощью:

- Google Lighthouse;
- Lighthouse CI;
- Vercel production builds;
- Core Web Vitals.

Основные показатели:

```text
LCP — Largest Contentful Paint
CLS — Cumulative Layout Shift
INP — Interaction to Next Paint
FCP — First Contentful Paint
TBT — Total Blocking Time
```

Особое внимание уделяется мобильной версии.

---

# Lighthouse CI

В проекте используется конфигурация:

```text
lighthouserc.cjs
```

Lighthouse CI проверяет ключевые страницы проекта после production build/deployment.

В проверку могут входить:

```text
/

/articles
/articles/category/astrology
/articles/category/tarot
/articles/category/jungian-psychology

/education
/education/astrology
/education/tarot
/education/jungian-psychology
/education/webinars
```

Цель CI-проверки — обнаруживать регрессии производительности и SEO до того, как они останутся незамеченными в production.

---

# Архитектура

Упрощённая структура:

```text
.
├── content/
│   └── articles/
│       ├── astrology/
│       ├── tarot/
│       └── jungian-psychology/
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── articles/
│   │   ├── education/
│   │   ├── contacts/
│   │   ├── about/
│   │   ├── api/
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   ├── config/
│   ├── data/
│   ├── lib/
│   └── types/
│
├── lighthouserc.cjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

# Design System

Основные CSS variables:

```css
:root {
  /* Backgrounds */
  --color-bg: #f4f0e8;
  --color-surface: #fbfaf7;
  --color-bg2: #e8e1d5;
  --color-surface-warm: #f6edcf;

  /* Text */
  --color-text: #20201e;
  --color-text-secondary: #625f59;
  --color-text-muted: #918c83;

  /* Borders */
  --color-border: #d9d2c6;

  /* Brand / Yellow */
  --color-accent: #d8a928;
  --color-accent-hover: #bd8e17;
  --color-accent-light: #f3e5ae;

  /* Blue */
  --color-blue: #243b53;
  --color-blue-hover: #192d40;
  --color-blue-light: #dfe7ed;

  /* Base */
  --color-white: #ffffff;
  --color-black: #000000;

  /* Fonts */
  --font-body: 'Open Sans', sans-serif;
  --font-heading: 'Montserrat', sans-serif;

  /* Container */
  --container-width: 1280px;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  --space-2xl: 96px;
  --space-3xl: 128px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
}
```

---

# Local Development

Клонировать репозиторий:

```bash
git clone <repository-url>
cd ingenium-life-com-ua
```

Установить зависимости:

```bash
npm install
```

Запустить development server:

```bash
npm run dev
```

После запуска:

```text
http://localhost:3000
```

---

# Production Build

Перед отправкой изменений необходимо как минимум проверить production build:

```bash
npm run build
```

При наличии соответствующих scripts также выполняются проверки lint и Lighthouse CI.

---

# Deployment

Проект размещён на **Vercel**.

Production:

```text
https://ingenium-life.com.ua/
```

Основная ветка:

```text
main
```

Изменения основной ветки проходят production build перед deployment.

---

# Правила разработки

При изменении проекта придерживаемся следующих принципов.

### 1. Не ломать существующие URL

URL, уже присутствующие в поисковой выдаче, не изменяются без необходимости.

При изменении обязательно используется `301 redirect`.

### 2. Server Components по умолчанию

`'use client'` добавляется только компонентам, которым действительно необходимы:

- state;
- effects;
- browser API;
- обработчики интерактивности.

### 3. Контент отделён от UI

Статьи, курсы и вебинары не должны быть жёстко зашиты в компоненты, если данные можно вынести в Markdown или data layer.

### 4. Переиспользуемые компоненты

Общие элементы интерфейса выносятся в компоненты вместо копирования между страницами.

### 5. Metadata обязательны

Новая индексируемая страница не считается законченной без SEO metadata.

### 6. Следить за изображениями

Для изображений необходимо:

- использовать подходящий формат;
- не загружать изображение значительно больше требуемого размера;
- задавать корректные размеры;
- использовать `next/image`, где это целесообразно;
- добавлять `alt`.

### 7. Проверять мобильную версию

Изменение не считается законченным после проверки только desktop layout.

### 8. Не ухудшать Lighthouse без причины

Особенно контролируются:

```text
Performance
Accessibility
Best Practices
SEO
```

---

# Добавление новой страницы

Типичный процесс:

```text
1. Создать route
        ↓
2. Добавить контент
        ↓
3. Добавить metadata
        ↓
4. Добавить canonical
        ↓
5. Добавить breadcrumbs
        ↓
6. Добавить JSON-LD при необходимости
        ↓
7. Добавить внутренние ссылки
        ↓
8. Проверить sitemap
        ↓
9. Проверить mobile
        ↓
10. npm run build
        ↓
11. Lighthouse
        ↓
12. Deploy
```

---

# Цель проекта

InGenium Life постепенно развивается из обычного образовательного сайта в полноценную контентную платформу.

Архитектура проекта должна позволять масштабировать:

- статьи;
- категории;
- образовательные программы;
- курсы;
- вебинары;
- бесплатные материалы;
- консультации;
- отзывы;
- мультиязычность;
- внутреннюю перелинковку;
- Schema.org;
- органический поисковый трафик.

Главный технический приоритет проекта:

**SEO + Performance + Maintainability + Scalability.**

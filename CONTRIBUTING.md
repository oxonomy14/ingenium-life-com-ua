# Contributing to InGenium Life

Этот документ описывает основные правила разработки проекта **InGenium Life**.

Главные приоритеты проекта:

**SEO → Performance → Maintainability → Scalability**

При внесении изменений важно учитывать не только визуальный результат, но и влияние на существующую поисковую выдачу, производительность и архитектуру сайта.

---

# 1. Установка проекта

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

Сайт будет доступен по адресу:

```text
http://localhost:3000
```

---

# 2. Основные команды

Проект содержит следующие npm scripts:

```bash
npm run dev
```

Запускает Next.js development server.

```bash
npm run build
```

Создаёт production build.

Эта команда особенно важна перед отправкой изменений, поскольку позволяет обнаружить:

- TypeScript errors;
- ошибки Server Components;
- проблемы с dynamic routes;
- ошибки генерации статических страниц;
- некорректные imports;
- проблемы metadata;
- ошибки production rendering.

---

```bash
npm run start
```

Запускает локально production build.

Перед этим необходимо выполнить:

```bash
npm run build
```

---

```bash
npm run lint
```

Запускает ESLint.

Используется для проверки качества и корректности кода.

---

# 3. Проверка перед commit

Перед commit рекомендуется выполнить:

```bash
npm run lint
npm run build
```

Обе команды должны завершиться без ошибок.

Минимальный workflow:

```text
Изменения
   ↓
npm run lint
   ↓
npm run build
   ↓
проверка сайта
   ↓
git add
   ↓
git commit
   ↓
git push
```

---

# 4. Структура проекта

Основная структура:

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

# 5. App Router

Проект использует **Next.js App Router**.

Routes создаются внутри:

```text
src/app/
```

Например:

```text
src/app/articles/page.tsx
```

соответствует:

```text
/articles
```

А:

```text
src/app/articles/[slug]/page.tsx
```

соответствует динамическому route:

```text
/articles/[slug]
```

---

# 6. Server Components

По умолчанию компоненты должны оставаться **Server Components**.

Не добавляйте:

```tsx
'use client';
```

без необходимости.

Client Component используется, если компоненту необходимы:

- `useState`;
- `useEffect`;
- event handlers;
- browser API;
- интерактивное состояние;
- другая client-side логика.

Чем меньше клиентского JavaScript отправляется пользователю, тем лучше для производительности сайта.

---

# 7. CSS Modules

Для компонентов используются CSS Modules.

Пример:

```text
ArticleCard/
├── ArticleCard.tsx
└── ArticleCard.module.css
```

Импорт:

```tsx
import css from './ArticleCard.module.css';
```

Использование:

```tsx
<div className={css.card}>
```

В проекте придерживаемся имени:

```tsx
css;
```

а не:

```tsx
styles;
```

---

# 8. Design System

Не следует создавать локальные цвета, если подходящая переменная уже существует.

Используйте глобальные CSS variables:

```css
var(--color-bg)
var(--color-surface)
var(--color-text)
var(--color-text-secondary)
var(--color-text-muted)

var(--color-accent)
var(--color-accent-hover)
var(--color-accent-light)

var(--color-blue)
var(--color-blue-hover)
var(--color-blue-light)

var(--color-border)
```

То же относится к spacing:

```css
var(--space-xs)
var(--space-sm)
var(--space-md)
var(--space-lg)
var(--space-xl)
var(--space-2xl)
var(--space-3xl)
```

и radius:

```css
var(--radius-sm)
var(--radius-md)
```

---

# 9. Добавление новой страницы

При создании новой индексируемой страницы недостаточно просто добавить `page.tsx`.

Необходимо проверить весь SEO lifecycle.

Минимальный процесс:

```text
Создать route
      ↓
Создать контент
      ↓
Добавить Metadata
      ↓
Canonical
      ↓
Breadcrumbs
      ↓
Structured Data
      ↓
Internal Linking
      ↓
Sitemap
      ↓
Mobile
      ↓
Lint
      ↓
Build
      ↓
Lighthouse
```

---

# 10. Metadata

Каждая индексируемая страница должна иметь уникальные:

```text
title
description
canonical
```

Пример:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Название страницы',
  description: 'Описание страницы.',
  alternates: {
    canonical: '/page',
  },
};
```

Не копируйте одинаковые `title` и `description` на разные страницы.

---

# 11. Canonical

Каждая индексируемая страница должна иметь корректный canonical.

Пример:

```tsx
alternates: {
  canonical: '/education/astrology',
}
```

Canonical должен указывать на основной индексируемый URL страницы.

---

# 12. Open Graph

Для важных страниц необходимо проверить Open Graph metadata.

В проекте используется общая OG-картинка, но отдельные материалы могут иметь собственные изображения.

Особенно это касается:

- статей;
- курсов;
- вебинаров.

---

# 13. Structured Data

Проект использует Schema.org через JSON-LD.

В зависимости от страницы могут использоваться:

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

Structured Data должны описывать реальный контент страницы.

Не добавляйте Schema только ради поисковой оптимизации, если соответствующего содержимого на странице нет.

---

# 14. Breadcrumbs

Для вложенных страниц должны использоваться breadcrumbs.

Например:

```text
Главная
→ Обучение
→ Астрология
→ Натальная астрология 2.0
```

Breadcrumbs желательно поддерживать одновременно:

1. визуально на странице;
2. через `BreadcrumbList` JSON-LD.

---

# 15. Sitemap

Sitemap находится в:

```text
src/app/sitemap.ts
```

При добавлении нового раздела необходимо определить, должен ли он присутствовать в sitemap.

Обычно в sitemap должны попадать:

- основные страницы;
- категории;
- статьи;
- курсы;
- вебинары;
- другие индексируемые landing pages.

Не добавляйте:

- API routes;
- служебные страницы;
- страницы с `noindex`;
- технические URL.

---

# 16. Robots

Конфигурация:

```text
src/app/robots.ts
```

При добавлении новых разделов убедитесь, что они случайно не заблокированы для поисковых роботов.

---

# 17. Миграция с Tilda

Это особенно важное правило проекта.

Сайт переносится с Tilda на Next.js с сохранением существующей органической выдачи.

Поэтому существующие индексируемые URL нельзя менять без необходимости.

Если старый URL:

```text
/some-page
```

имеет поисковый трафик, предпочтительно сохранить:

```text
/some-page
```

в новой версии сайта.

---

# 18. Redirects

Если URL всё-таки необходимо изменить:

```text
OLD URL
   ↓
301
   ↓
NEW URL
```

Не допускайте:

```text
URL A
 ↓
URL B
 ↓
URL C
```

То есть redirect chains.

Предпочтительно:

```text
URL A → URL C
```

одним `301 redirect`.

---

# 19. Статьи

Статьи находятся в:

```text
content/articles/
```

и распределены по категориям:

```text
content/articles/
├── astrology/
├── tarot/
└── jungian-psychology/
```

При добавлении статьи необходимо:

- создать Markdown-файл;
- указать корректный `slug`;
- определить категорию;
- заполнить SEO description;
- добавить short description;
- указать дату;
- добавить изображение;
- указать `imageAlt`;
- проверить автора;
- проверить отображение статьи;
- проверить category page;
- проверить sitemap;
- проверить Article JSON-LD.

---

# 20. Frontmatter статьи

Пример:

```yaml
---
title: 'Название статьи'
description: 'SEO описание статьи'
shortDescription: 'Краткое описание для карточки'
date: '2026-08-22'

category: 'astrology'
labelCategory: 'Астрология'

image: '/images/articles/example.webp'
imageAlt: 'Описание изображения'

authorId: 'pavel-dementiev'
---
```

Не используйте одинаковые descriptions для нескольких статей.

---

# 21. Изображения статей

Для cover-изображений предпочтительно использовать размер:

```text
1600 × 800
```

Изображение должно:

- соответствовать теме статьи;
- иметь разумный размер файла;
- не содержать лишний текст;
- иметь корректный `alt`;
- не вызывать layout shift.

---

# 22. Курсы

Данные курсов должны храниться отдельно от UI-компонентов.

Не следует создавать отдельную hardcoded карточку курса, если информация уже существует в data layer.

Данные курса должны переиспользоваться для:

```text
Course Page
Course Card
Education Catalog
Pricing
Sitemap
JSON-LD
Internal Linking
```

---

# 23. Вебинары

При добавлении нового вебинара необходимо проверить:

- slug;
- title;
- description;
- short description;
- category;
- year;
- author;
- access;
- materials;
- program;
- price;
- metadata;
- canonical;
- breadcrumbs;
- structured data;
- sitemap.

---

# 24. Внутренняя перелинковка

Новая страница не должна существовать изолированно.

Для важных страниц необходимо определить, откуда пользователь и поисковый робот смогут на неё перейти.

Например:

```text
Article
   ↓
Related Course
```

или:

```text
Course
   ↓
Related Articles
```

или:

```text
Education Category
   ↓
Course
   ↓
Related Webinar
```

Внутренняя перелинковка является частью SEO-архитектуры проекта.

---

# 25. Изображения

По возможности используйте:

```tsx
import Image from 'next/image';
```

Всегда проверяйте:

- `width`;
- `height`;
- `sizes`;
- `alt`;
- формат;
- фактический размер файла.

Не используйте `priority` для большого количества изображений.

Priority имеет смысл только для действительно критических изображений первого экрана.

---

# 26. LCP

Особое внимание уделяется **Largest Contentful Paint**.

Если изображение является LCP-элементом:

- оно должно загружаться достаточно рано;
- не должно быть чрезмерно большим;
- размеры должны быть известны заранее;
- `sizes` должен соответствовать layout;
- нельзя без необходимости lazy-load критический LCP image.

---

# 27. Core Web Vitals

Контролируются:

```text
LCP
CLS
INP
```

Также Lighthouse показывает диагностические показатели:

```text
FCP
TBT
Speed Index
```

Изменение дизайна не должно неоправданно ухудшать Core Web Vitals.

---

# 28. Lighthouse

После существенных изменений рекомендуется проверить Lighthouse.

Особенно после изменений:

- Hero;
- изображений;
- fonts;
- Header;
- global layout;
- client components;
- сторонних scripts;
- analytics;
- больших UI-компонентов.

Основные категории:

```text
Performance
Accessibility
Best Practices
SEO
```

---

# 29. Lighthouse CI

В проекте используется:

```text
lighthouserc.cjs
```

Lighthouse CI проверяет ключевые production URL.

При добавлении важного нового раздела стоит рассмотреть добавление его URL в Lighthouse CI.

Не нужно добавлять туда каждую статью.

Достаточно проверять репрезентативные страницы разных типов.

Например:

```text
Homepage
Articles
Article Category
Single Article
Education
Education Category
Course
Webinars
```

---

# 30. Accessibility

При создании компонентов проверяйте:

- semantic HTML;
- `label` для form controls;
- keyboard navigation;
- focus states;
- контраст текста;
- `aria-label` там, где он действительно нужен;
- `alt` изображений;
- корректную структуру заголовков.

Не используйте `div` как кнопку.

Вместо:

```tsx
<div onClick={handleClick}>
```

используйте:

```tsx
<button type="button" onClick={handleClick}>
```

---

# 31. Responsive Design

Каждая новая страница должна проверяться минимум в трёх состояниях:

```text
Desktop
Tablet
Mobile
```

Особое внимание:

- horizontal overflow;
- длинным заголовкам;
- grid;
- navigation;
- изображениям;
- кнопкам;
- таблицам;
- breadcrumbs.

---

# 32. TypeScript

Не используйте `any`, если тип можно определить.

Общие типы следует выносить в:

```text
src/types/
```

Например:

```text
src/types/article.ts
```

Данные должны соответствовать TypeScript-моделям проекта.

---

# 33. React keys

Для списков используйте стабильные идентификаторы:

```tsx
items.map((item) => <Component key={item.slug} />);
```

Не используйте index как `key`, если существует стабильный идентификатор.

---

# 34. Dependencies

Не добавляйте новую npm dependency для задачи, которую можно разумно решить существующими средствами проекта.

Перед установкой новой библиотеки необходимо учитывать:

- bundle size;
- поддержку;
- совместимость с Next.js;
- необходимость client-side JavaScript;
- влияние на производительность.

---

# 35. Environment Variables

Секретные данные нельзя добавлять в Git.

Не commit:

```text
.env
.env.local
```

API keys, tokens и другие секреты должны храниться через environment variables.

Публичные значения должны использовать `NEXT_PUBLIC_*` только тогда, когда они действительно должны быть доступны браузеру.

---

# 36. Git

Перед началом работы рекомендуется обновить локальную ветку:

```bash
git pull
```

После изменений:

```bash
git status
```

Проверить изменения:

```bash
git diff
```

Добавить необходимые файлы:

```bash
git add .
```

Создать commit:

```bash
git commit -m "feat: add reviews page"
```

Отправить:

```bash
git push
```

---

# 37. Commit Messages

Желательно использовать короткие понятные сообщения.

Примеры:

```text
feat: add reviews page
feat: add webinar schema
fix: correct article category routing
fix: improve mobile navigation
seo: update sitemap
seo: add canonical metadata
perf: optimize hero image
refactor: extract course card
content: add astrology article
style: improve contacts layout
```

Commit должен описывать конкретное изменение.

Не рекомендуется:

```text
fix
changes
update
test
123
final
final-final
```

---

# 38. Перед git push

Финальный checklist:

- [ ] страница работает локально;
- [ ] desktop layout проверен;
- [ ] mobile layout проверен;
- [ ] нет ошибок в console;
- [ ] нет битых ссылок;
- [ ] metadata корректны;
- [ ] canonical корректный;
- [ ] изображения имеют `alt`;
- [ ] structured data соответствует странице;
- [ ] sitemap обновлён при необходимости;
- [ ] старые URL не сломаны;
- [ ] redirects добавлены при необходимости;
- [ ] `npm run lint` проходит;
- [ ] `npm run build` проходит;
- [ ] Lighthouse проверен для существенных изменений.

---

# 39. После deployment

После production deployment необходимо проверить изменённые страницы непосредственно на:

```text
https://ingenium-life.com.ua/
```

Проверить:

- HTTP status;
- layout;
- изображения;
- navigation;
- canonical;
- metadata;
- structured data;
- sitemap при изменении структуры;
- Lighthouse для важных изменений.

Production-проверка особенно важна для проблем, которые могут не проявляться в development mode.

---

# 40. Главный принцип

При разработке InGenium Life необходимо учитывать четыре уровня:

```text
Content
   ↓
Architecture
   ↓
SEO
   ↓
Performance
```

Изменение считается успешным не только тогда, когда страница визуально работает.

Оно также должно:

- корректно индексироваться;
- не ломать существующие URL;
- быть доступным через внутренние ссылки;
- иметь корректные metadata;
- оставаться быстрым;
- быть поддерживаемым;
- масштабироваться вместе с проектом.

**SEO + Performance + Maintainability + Scalability**

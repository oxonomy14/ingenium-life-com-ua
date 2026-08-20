// src/app/webinars/_components/WebinarCatalog/WebinarCatalog.tsx

'use client';

import { useState } from 'react';

import Container from '@/components/Container/Container';
import WebinarCard from '../WebinarCard/WebinarCard';

import { webinarCategories } from '@/data/webinarCategories';

import type { Webinars, WebinarCategory } from '@/types/webinar';

import css from './WebinarCatalog.module.css';

type WebinarCatalogProps = {
  webinars: Webinars[];
};

type ActiveCategory = 'all' | WebinarCategory;

export default function WebinarCatalog({ webinars }: WebinarCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all');

  const filteredWebinars =
    activeCategory === 'all'
      ? webinars
      : webinars.filter((webinar) => webinar.category === activeCategory);

  return (
    <section className={css.section} id="webinars">
      <Container>
        <div className={css.header}>
          <div className={css.heading}>
            <span className={css.eyebrow}>Каталог</span>

            <h2 className={css.title}>Вебинары в записи</h2>
          </div>

          <p className={css.description}>
            Выберите направление или посмотрите весь архив вебинаров Павла
            Дементьева.
          </p>
        </div>

        <div
          className={css.filters}
          aria-label="Фильтр вебинаров по категориям"
        >
          <button
            type="button"
            className={
              activeCategory === 'all'
                ? `${css.filter} ${css.active}`
                : css.filter
            }
            aria-pressed={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          >
            Все
          </button>

          {webinarCategories.map((category) => (
            <button
              key={category.slug}
              type="button"
              className={
                activeCategory === category.slug
                  ? `${css.filter} ${css.active}`
                  : css.filter
              }
              aria-pressed={activeCategory === category.slug}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {filteredWebinars.length > 0 ? (
          <div className={css.grid}>
            {filteredWebinars.map((webinar) => (
              <WebinarCard key={webinar.slug} webinar={webinar} />
            ))}
          </div>
        ) : (
          <div className={css.empty}>
            <p>В этой категории пока нет опубликованных вебинаров.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

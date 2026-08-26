'use client';

import { FormEvent, useState } from 'react';

import Container from '@/components/Container/Container';

import css from './ReviewForm.module.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export type ReviewProgramOption = {
  value: string;
  label: string;
  type: 'course' | 'webinar' | 'consultation' | 'rectification';
};

type ReviewFormProps = {
  targets: ReviewProgramOption[];
};

export default function ReviewForm({ targets }: ReviewFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedTarget, setSelectedTarget] = useState('');

  const isOther = selectedTarget === 'other';

  const courses = targets.filter((item) => item.type === 'course');

  const webinars = targets.filter((item) => item.type === 'webinar');

  const consultations = targets.filter((item) => item.type === 'consultation');

  const rectifications = targets.filter(
    (item) => item.type === 'rectification',
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      target: formData.get('target'),
      targetName: formData.get('targetName'),
      review: formData.get('review'),
      consent: formData.get('consent') === 'on',
      website: formData.get('website'),
    };

    try {
      setStatus('sending');

      const response = await fetch('/api/reviews', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Review submit failed');
      }

      form.reset();

      setSelectedTarget('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.content}>
            <span className={css.eyebrow}>Ваш опыт</span>

            <h2 className={css.title}>Оставьте отзыв</h2>

            <p className={css.description}>
              Если вы проходили курс, вебинар, консультацию или ректификацию в
              InGenium, расскажите о своём опыте.
            </p>

            <p className={css.note}>
              Отзывы публикуются после модерации. Мы можем исправить явные
              опечатки, но не меняем смысл текста.
            </p>
          </div>

          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.field}>
              <label htmlFor="review-name" className={css.label}>
                Имя
              </label>

              <input
                id="review-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                maxLength={80}
                className={css.input}
                placeholder="Ваше имя"
              />
            </div>
            <div className={css.field}>
              <label htmlFor="review-email" className={css.label}>
                Email
              </label>

              <input
                id="review-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className={css.input}
                placeholder="name@example.com"
                aria-describedby="review-email-hint"
              />

              <p id="review-email-hint" className={css.fieldHint}>
                Email нужен только для проверки, действительно ли вы проходили
                выбранный курс, вебинар или консультацию. При публикации отзыва
                email не отображается.
              </p>
            </div>
            <div className={css.field}>
              <label htmlFor="review-target" className={css.label}>
                Курс, вебинар или услуга
              </label>

              <select
                id="review-target"
                name="target"
                required
                value={selectedTarget}
                onChange={(event) => setSelectedTarget(event.target.value)}
                className={css.select}
              >
                <option value="" disabled>
                  Выберите вариант
                </option>

                {courses.length > 0 && (
                  <optgroup label="Курсы">
                    {courses.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </optgroup>
                )}

                {webinars.length > 0 && (
                  <optgroup label="Вебинары">
                    {webinars.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </optgroup>
                )}

                {consultations.length > 0 && (
                  <optgroup label="Консультации">
                    {consultations.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </optgroup>
                )}

                {rectifications.length > 0 && (
                  <optgroup label="Ректификация">
                    {rectifications.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </optgroup>
                )}

                <option value="other">Другое</option>
              </select>
            </div>

            {isOther && (
              <div className={css.field}>
                <label htmlFor="review-target-name" className={css.label}>
                  Название
                </label>

                <input
                  id="review-target-name"
                  name="targetName"
                  type="text"
                  required
                  minLength={2}
                  maxLength={120}
                  className={css.input}
                  placeholder="Укажите курс, вебинар или услугу"
                />
              </div>
            )}

            <div className={css.field}>
              <label htmlFor="review-text" className={css.label}>
                Отзыв
              </label>

              <textarea
                id="review-text"
                name="review"
                required
                minLength={20}
                maxLength={3000}
                rows={8}
                className={css.textarea}
                placeholder="Расскажите о своём опыте, что оказалось полезным и что вам особенно понравилось"
              />
            </div>

            {/* Honeypot */}
            <div className={css.honeypot} aria-hidden="true">
              <label htmlFor="review-website">Website</label>

              <input
                id="review-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <label className={css.consent}>
              <input
                name="consent"
                type="checkbox"
                required
                className={css.checkbox}
              />

              <span>
                Я согласен(на) на публикацию имени и текста отзыва на сайте
                InGenium.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={css.button}
            >
              {status === 'sending' ? 'Отправляем…' : 'Отправить отзыв'}
            </button>

            <div className={css.status} aria-live="polite">
              {status === 'success' && (
                <p className={css.success}>
                  Спасибо! Отзыв отправлен на модерацию.
                </p>
              )}

              {status === 'error' && (
                <p className={css.error}>
                  Не удалось отправить отзыв. Попробуйте ещё раз.
                </p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

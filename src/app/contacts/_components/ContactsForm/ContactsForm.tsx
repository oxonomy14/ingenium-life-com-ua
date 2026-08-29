// src/components/ContactsForm/ContactsForm.tsx

'use client';

import { FormEvent, useState } from 'react';

import css from './ContactsForm.module.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

type ContactMethod = 'telegram' | 'whatsapp' | 'viber';

export default function ContactsForm() {
  const [contactMethod, setContactMethod] = useState<ContactMethod>('telegram');

  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      contactMethod: formData.get('contactMethod'),
      contact: formData.get('contact'),
      message: formData.get('message'),
      website: formData.get('website'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send form');
      }

      form.reset();

      setContactMethod('telegram');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.row}>
          <div className={css.field}>
            <label htmlFor="name">Ваше ім’я</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Як до вас звертатися"
              autoComplete="name"
              required
            />
          </div>

          <div className={css.field}>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className={css.field}>
          <label htmlFor="subject">Тема звернення</label>

          <select id="subject" name="subject" defaultValue="">
            <option value="" disabled>
              Оберіть тему
            </option>

            <option value="education">Навчання</option>
            <option value="consultation">Консультація</option>
            <option value="webinar">Вебінари</option>
            <option value="closed-channel">
              Авторський канал Павла Дементьєва
            </option>
            <option value="other">Інше питання</option>
          </select>
        </div>

        <fieldset className={css.contactMethod}>
          <legend>Як вам зручно отримати відповідь?</legend>

          <div className={css.methodOptions}>
            <label className={css.method}>
              <input
                type="radio"
                name="contactMethod"
                value="telegram"
                checked={contactMethod === 'telegram'}
                onChange={() => setContactMethod('telegram')}
              />

              <span>Telegram</span>
            </label>

            <label className={css.method}>
              <input
                type="radio"
                name="contactMethod"
                value="whatsapp"
                checked={contactMethod === 'whatsapp'}
                onChange={() => setContactMethod('whatsapp')}
              />

              <span>WhatsApp</span>
            </label>

            <label className={css.method}>
              <input
                type="radio"
                name="contactMethod"
                value="viber"
                checked={contactMethod === 'viber'}
                onChange={() => setContactMethod('viber')}
              />

              <span>Viber</span>
            </label>
          </div>
        </fieldset>

        <div className={css.field}>
          <label htmlFor="contact">
            {contactMethod === 'telegram' ? 'Ваш Telegram' : 'Номер телефону'}
          </label>

          <input
            id="contact"
            name="contact"
            type={contactMethod === 'telegram' ? 'text' : 'tel'}
            placeholder={
              contactMethod === 'telegram' ? '@username' : '+380 00 000 00 00'
            }
            autoComplete={contactMethod === 'telegram' ? 'off' : 'tel'}
            required
          />

          <span className={css.hint}>
            {contactMethod === 'telegram'
              ? 'Вкажіть username, за яким ми зможемо вам написати.'
              : contactMethod === 'whatsapp'
                ? 'Вкажіть номер телефону, до якого підключено WhatsApp.'
                : 'Вкажіть номер телефону, до якого підключено Viber.'}
          </span>
        </div>

        <div className={css.field}>
          <label htmlFor="message">Повідомлення</label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Коротко розкажіть, чим ми можемо допомогти"
            required
          />
        </div>

        {/* Honeypot проти простих ботів */}
        <div className={css.website} aria-hidden="true">
          <label htmlFor="website">Website</label>

          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className={css.submit}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Надсилаємо...' : 'Надіслати повідомлення'}
        </button>

        <p className={css.privacy}>
          Надсилаючи форму, ви погоджуєтеся на обробку даних, необхідних для
          відповіді на ваше звернення.
        </p>

        {status === 'success' && (
          <p className={css.success} role="status">
            Дякуємо. Повідомлення надіслано. Ми зв’яжемося з вами вказаним
            способом.
          </p>
        )}

        {status === 'error' && (
          <p className={css.error} role="alert">
            Не вдалося надіслати повідомлення. Спробуйте ще раз або напишіть нам
            електронною поштою.
          </p>
        )}
      </form>
    </div>
  );
}

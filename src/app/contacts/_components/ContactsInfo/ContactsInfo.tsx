// src/components/ContactsInfo/ContactsInfo.tsx

import Container from '@/components/Container/Container';
import ContactsForm from '../../_components/ContactsForm/ContactsForm';

import { siteConfig } from '@/config/site';

import css from './ContactsInfo.module.css';

export default function ContactsInfo() {
  const { email, phone, phoneLabel, telegram, whatsapp } = siteConfig.contacts;

  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.intro}>
            <p className={css.eyebrow}>Связаться с нами</p>

            <h2 className={css.title}>
              Напишите нам
              <span> удобным способом</span>
            </h2>

            <p className={css.text}>
              Оставьте сообщение и укажите, где вам удобнее получить ответ — в
              Telegram, WhatsApp или Viber.
            </p>

            <div className={css.directContacts}>
              <a href={`mailto:${email}`} className={css.directContact}>
                <span className={css.directLabel}>Email</span>
                <span className={css.directValue}>{email}</span>
              </a>

              {phone && (
                <a href={`tel:${phone}`} className={css.directContact}>
                  <span className={css.directLabel}>Телефон</span>
                  <span className={css.directValue}>{phoneLabel || phone}</span>
                </a>
              )}

              {telegram && (
                <a
                  href={telegram}
                  className={css.directContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <span className={css.directLabel}>Telegram</span>
                  <span className={css.directValue}>{telegram}</span>
                </a>
              )}
              {whatsapp && (
                <a
                  href={telegram}
                  className={css.directContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <span className={css.directLabel}>Whatsapp</span>
                  <span className={css.directValue}>{whatsapp}</span>
                </a>
              )}
            </div>
          </div>

          <ContactsForm />
        </div>

        <div className={css.questions}>
          <div className={css.questionsHeader}>
            <p className={css.eyebrow}>Можно обратиться</p>

            <h2 className={css.questionsTitle}>
              По каким вопросам мы можем помочь
            </h2>
          </div>

          <div className={css.questionGrid}>
            <article className={css.question}>
              <span>01</span>

              <h3>Обучение</h3>

              <p>
                Подбор курса, программа обучения, формат занятий, доступ к
                материалам и организационные вопросы.
              </p>
            </article>

            <article className={css.question}>
              <span>02</span>

              <h3>Консультации</h3>

              <p>
                Запись на консультацию по астрологии или Таро, выбор формата и
                уточнение деталей.
              </p>
            </article>

            <article className={css.question}>
              <span>03</span>

              <h3>Вебинары</h3>

              <p>
                Участие в открытых вебинарах, доступ к записям и мероприятиям
                InGenium.
              </p>
            </article>

            <article className={css.question}>
              <span>04</span>

              <h3>Сотрудничество</h3>

              <p>
                Партнёрские проекты, публикации, выступления и другие
                предложения о сотрудничестве.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

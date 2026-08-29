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
            <p className={css.eyebrow}>Зв’язатися з нами</p>

            <h2 className={css.title}>
              Напишіть нам
              <span> зручним способом</span>
            </h2>

            <p className={css.text}>
              Залиште повідомлення та вкажіть, де вам зручніше отримати
              відповідь — у Telegram, WhatsApp або Viber.
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
                  href={whatsapp}
                  className={css.directContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <span className={css.directLabel}>WhatsApp</span>
                  <span className={css.directValue}>{whatsapp}</span>
                </a>
              )}
            </div>
          </div>

          <ContactsForm />
        </div>

        <div className={css.questions}>
          <div className={css.questionsHeader}>
            <p className={css.eyebrow}>Можна звернутися</p>

            <h2 className={css.questionsTitle}>
              З яких питань ми можемо допомогти
            </h2>
          </div>

          <div className={css.questionGrid}>
            <article className={css.question}>
              <span>01</span>

              <h3>Навчання</h3>

              <p>
                Підбір курсу, програма навчання, формат занять, доступ до
                матеріалів та організаційні питання.
              </p>
            </article>

            <article className={css.question}>
              <span>02</span>

              <h3>Консультації</h3>

              <p>
                Запис на консультацію з астрології або Таро, вибір формату та
                уточнення деталей.
              </p>
            </article>

            <article className={css.question}>
              <span>03</span>

              <h3>Вебінари</h3>

              <p>
                Участь у відкритих вебінарах, доступ до записів та заходів
                InGenium.
              </p>
            </article>

            <article className={css.question}>
              <span>04</span>

              <h3>Співпраця</h3>

              <p>
                Партнерські проєкти, публікації, виступи та інші пропозиції щодо
                співпраці.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

// src/components/ContactsInfo/ContactsInfo.tsx

import Container from '@/components/Container/Container';

import css from './ContactsInfo.module.css';

const contacts = [
  {
    label: 'Telegram',
    value: 'Написать в Telegram',
    href: 'https://t.me/USERNAME',
    external: true,
  },
  {
    label: 'WhatsApp',
    value: 'Написать в WhatsApp',
    href: 'https://wa.me/XXXXXXXXXXX',
    external: true,
  },
  {
    label: 'Email',
    value: 'info@ingenium-life.com.ua',
    href: 'mailto:info@ingenium-life.com.ua',
  },
  {
    label: 'Телефон',
    value: '+380 XX XXX XX XX',
    href: 'tel:+380XXXXXXXXX',
  },
];

export default function ContactsInfo() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.intro}>
            <p className={css.eyebrow}>Связаться с нами</p>

            <h2 className={css.title}>
              Выберите удобный
              <span> способ связи</span>
            </h2>

            <p className={css.text}>
              Для быстрого ответа рекомендуем написать в Telegram или WhatsApp.
              По вопросам сотрудничества и организационным вопросам можно
              использовать электронную почту.
            </p>
          </div>

          <div className={css.contacts}>
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className={css.contact}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
              >
                <div>
                  <span className={css.label}>{contact.label}</span>

                  <span className={css.value}>{contact.value}</span>
                </div>

                <span className={css.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
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

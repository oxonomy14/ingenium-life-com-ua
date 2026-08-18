import Container from '@/components/Container/Container';

import type { Course, CoursePaymentOption } from '@/lib/courses';

import { convertAndFormatRubToUah, formatRub, formatUah } from '@/lib/currency';

import css from './CoursePricing.module.css';

type CoursePricingProps = {
  course: Course;
};

function PaymentPrice({ payment }: { payment: CoursePaymentOption }) {
  if (payment.currency === 'RUB') {
    return (
      <div className={css.priceBlock}>
        <p className={css.price}>
          ≈ {convertAndFormatRubToUah(payment.amount)}
        </p>

        {/*  <p className={css.originalPrice}>{formatRub(payment.amount)}</p> */}

        {payment.payments && payment.payments > 1 && (
          <p className={css.payments}>{payment.payments} платежа</p>
        )}
      </div>
    );
  }

  return (
    <div className={css.priceBlock}>
      <p className={css.price}>{formatUah(payment.amount)}</p>

      {payment.payments && payment.payments > 1 && (
        <p className={css.payments}>{payment.payments} платежа</p>
      )}
    </div>
  );
}

export default function CoursePricing({ course }: CoursePricingProps) {
  const { pricing } = course;

  if (!pricing?.options?.length) {
    return null;
  }

  const isSingleOption = pricing.options.length === 1;

  return (
    <section className={css.section} id="course-order">
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Стоимость</p>

          <h2 className={css.title}>{pricing.title || 'Стоимость обучения'}</h2>

          {pricing.description && (
            <p className={css.description}>{pricing.description}</p>
          )}
        </div>

        <div className={`${css.grid} ${isSingleOption ? css.single : ''}`}>
          {pricing.options.map((option) => (
            <article
              key={option.id}
              className={`${css.card} ${option.featured ? css.featured : ''}`}
            >
              <div className={css.cardTop}>
                <div>
                  <div className={css.cardHeading}>
                    <h3 className={css.cardTitle}>{option.title}</h3>

                    {option.badge && (
                      <span className={css.badge}>{option.badge}</span>
                    )}
                  </div>

                  {option.description && (
                    <p className={css.cardDescription}>{option.description}</p>
                  )}
                </div>

                {option.consultationIncluded && (
                  <div className={css.consultation}>
                    <strong>Индивидуальная консультация включена</strong>

                    {option.consultationDuration && (
                      <span>{option.consultationDuration}</span>
                    )}
                  </div>
                )}
              </div>

              {option.features?.length ? (
                <ul className={css.features}>
                  {option.features.map((feature) => (
                    <li key={feature} className={css.feature}>
                      <span className={css.check} aria-hidden="true">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className={css.paymentSection}>
                <p className={css.paymentLabel}>Варианты оплаты</p>

                <div className={css.paymentOptions}>
                  {option.paymentOptions.map((payment) => (
                    <div key={payment.id} className={css.paymentOption}>
                      <div className={css.paymentInfo}>
                        <div className={css.paymentTitleRow}>
                          <h4 className={css.paymentTitle}>{payment.title}</h4>

                          {payment.badge && (
                            <span className={css.paymentBadge}>
                              {payment.badge}
                            </span>
                          )}
                        </div>

                        {payment.description && (
                          <p className={css.paymentDescription}>
                            {payment.description}
                          </p>
                        )}
                      </div>

                      <PaymentPrice payment={payment} />
                    </div>
                  ))}
                </div>
              </div>

              <a href="/contacts" className={css.button}>
                Выбрать вариант
              </a>
            </article>
          ))}
        </div>

        {/*  <p className={css.note}>
          Стоимость в гривнах рассчитана по внутреннему курсу InGenium и носит
          ориентировочный характер.
        </p> */}
      </Container>
    </section>
  );
}

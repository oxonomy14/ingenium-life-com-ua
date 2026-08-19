// src/app/education/jungian-psychology/_components/Audience/Audience.tsx

import Container from '@/components/Container/Container';

import css from './Audience.module.css';

const audience = [
  {
    title: 'Для начинающих',
    description:
      'Если вы только знакомитесь с аналитической психологией и хотите получить системное представление об основных идеях Карла Густава Юнга.',
  },
  {
    title: 'Для психологов и консультантов',
    description:
      'Если вы хотите глубже понимать бессознательные процессы, комплексы, символы и психологическую динамику человека.',
  },
  {
    title: 'Для специалистов помогающих профессий',
    description:
      'Если вы работаете с людьми и хотите расширить инструменты понимания личности, внутренних конфликтов и жизненных сценариев.',
  },
  {
    title: 'Для самостоятельного изучения',
    description:
      'Если вас интересуют архетипы, Тень, сновидения, типология личности и более глубокое исследование собственного внутреннего мира.',
  },
];

export default function Audience() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Для кого</p>

            <h2 className={css.title}>Кому подойдёт обучение</h2>

            <p className={css.description}>
              Программы подходят как для первого знакомства с юнгианским
              подходом, так и для тех, кто уже работает с психологией и хочет
              расширить профессиональный инструментарий.
            </p>
          </div>

          <div className={css.grid}>
            {audience.map((item, index) => (
              <article key={item.title} className={css.card}>
                <span className={css.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className={css.cardTitle}>{item.title}</h3>

                <p className={css.cardDescription}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from '@/components/Container/Container';

import css from './AstrologyAudience.module.css';

const audienceItems = [
  {
    title: 'Тем, кто начинает с нуля',
    description:
      'Если вы только знакомитесь с астрологией, можно начать с базовых программ и постепенно перейти к анализу натальной карты.',
  },
  {
    title: 'Тем, кто уже изучал астрологию',
    description:
      'Курсы помогают систематизировать знания, убрать разрозненность и научиться соединять отдельные показатели карты в целостный анализ.',
  },
  {
    title: 'Тем, кто хочет консультировать',
    description:
      'Программы подойдут тем, кто хочет развивать практические навыки анализа и использовать астрологию в работе с запросами клиентов.',
  },
  {
    title: 'Тем, кто изучает астрологию для себя',
    description:
      'Полученные знания можно использовать для более глубокого понимания собственной карты, жизненных сценариев и индивидуальных особенностей.',
  },
];

export default function AstrologyAudience() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Кому подойдёт</p>

            <h2 className={css.title}>
              Начать можно с разного уровня подготовки
            </h2>

            <p className={css.description}>
              В каталоге есть программы как для первого знакомства с
              астрологией, так и для тех, кто хочет углубить уже имеющиеся
              знания и перейти к практике.
            </p>
          </div>

          <div className={css.list}>
            {audienceItems.map((item, index) => (
              <article key={item.title} className={css.item}>
                <span className={css.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={css.itemContent}>
                  <h3 className={css.itemTitle}>{item.title}</h3>

                  <p className={css.itemDescription}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

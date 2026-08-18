// src/app/education/tarot/_components/Audience/Audience.tsx

import Container from '@/components/Container/Container';

import css from './Audience.module.css';

const audienceItems = [
  {
    title: 'Тем, кто начинает с нуля',
    description:
      'Если вы только знакомитесь с Таро, обучение поможет последовательно разобраться в структуре колоды, символике Арканов и основных принципах чтения карт.',
  },
  {
    title: 'Тем, кто уже изучал Таро',
    description:
      'Курсы помогают систематизировать знания, выйти за рамки заученных значений и научиться видеть взаимосвязи между картами в раскладе.',
  },
  {
    title: 'Тем, кто хочет развивать практику',
    description:
      'Обучение подойдёт тем, кто хочет увереннее интерпретировать расклады, работать с разными запросами и развивать навыки практического чтения Таро.',
  },
  {
    title: 'Тем, кто изучает Таро для себя',
    description:
      'Таро можно изучать как систему символов и архетипов, которая помогает исследовать ситуации, внутренние процессы и возможные варианты развития событий.',
  },
];

export default function Audience() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.header}>
            <p className={css.eyebrow}>Кому подойдёт</p>

            <h2 className={css.title}>
              Начать можно с разного уровня подготовки
            </h2>

            <p className={css.description}>
              В каталоге есть программы как для первого знакомства с Таро, так и
              для тех, кто уже работает с картами и хочет углубить,
              систематизировать знания и развивать практику.
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

import Container from '@/components/Container/Container';

import css from './EducationForWhom.module.css';

const items = [
  {
    number: '01',
    title: 'Начинаете с нуля',
    text: 'Хотите получить прочную основу и изучать выбранное направление последовательно, без пробелов и хаотичного поиска информации.',
  },
  {
    number: '02',
    title: 'Уже изучали самостоятельно',
    text: 'Знаний накопилось много, но хочется привести их в систему, увидеть связи и сформировать целостное понимание.',
  },
  {
    number: '03',
    title: 'Хотите понимать глубже',
    text: 'Готовых трактовок уже недостаточно — важно понимать принципы, на которых построена система, и самостоятельно делать выводы.',
  },
  {
    number: '04',
    title: 'Используете знания на практике',
    text: 'Хотите увереннее применять полученные знания в собственной практике, анализе и работе с другими людьми.',
  },
];

export default function EducationForWhom() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.inner}>
          <div className={css.heading}>
            <p className={css.eyebrow}>Кому подойдёт</p>

            <h2 className={css.title}>
              Обучение для разного
              <span> уровня подготовки</span>
            </h2>

            <p className={css.description}>
              Начать можно с базовых программ или выбрать отдельные темы, если у
              вас уже есть опыт и знания.
            </p>
          </div>

          <div className={css.list}>
            {items.map((item) => (
              <article className={css.item} key={item.number}>
                <span className={css.number}>{item.number}</span>

                <div className={css.content}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

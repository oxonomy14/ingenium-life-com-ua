import Container from '@/components/Container/Container';

import css from './AboutIdea.module.css';

export default function AboutIdea() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.grid}>
          <div className={css.intro}>
            <p className={css.eyebrow}>Идея проекта</p>

            <div className={css.word}>
              <span className={css.wordMain}>InGenium</span>
              <span className={css.wordOrigin}>от лат. ingenium</span>
            </div>

            <p className={css.meaning}>
              природный дар · способность · талант · внутренний потенциал
            </p>
          </div>

          <div className={css.content}>
            <h2 className={css.title}>
              Помогать видеть глубже отдельных фактов и готовых ответов
            </h2>

            <div className={css.text}>
              <p>
                В основе InGenium лежит идея о том, что человек гораздо глубже
                набора отдельных качеств, реакций и жизненных обстоятельств.
              </p>

              <p>
                У каждого есть собственная внутренняя структура, способности и
                способы взаимодействия с миром — и их можно исследовать,
                понимать и развивать.
              </p>

              <p>
                Астрология, Таро и психология рассматриваются в InGenium не как
                набор готовых ответов, а как системы знания и символические
                языки, которые помогают увидеть взаимосвязи, лучше понимать себя
                и осознаннее принимать решения.
              </p>

              <p>
                Поэтому наша задача — не просто передавать информацию, а учить
                видеть систему, задавать вопросы, анализировать и постепенно
                формировать собственное понимание.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

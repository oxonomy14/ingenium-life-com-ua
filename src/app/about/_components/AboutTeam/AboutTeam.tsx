// src/app/about/_components/AboutTeam/AboutTeam.tsx

import Image from 'next/image';

import Container from '@/components/Container/Container';

import css from './AboutTeam.module.css';

const team = [
  {
    name: 'Катерина Ярська',
    role: 'Авторка курсів InGenium, викладачка',
    description:
      'Астрологиня, дослідниця та авторка освітніх програм InGenium. Працює з астрологією, символічними системами та практичним навчанням.',
    image: '/images/about/ekaterina-yarskaya.webp',
    alt: 'Катерина Ярська — авторка курсів і викладачка InGenium',
  },
  {
    name: 'Світлана Щербакова',
    role: 'Адміністраторка InGenium',
    description:
      'Працює з учасниками та клієнтами InGenium, допомагає з організаційними питаннями та комунікацією.',
    image: '/images/about/svetlana-shcherbakova.webp',
    alt: 'Світлана Щербакова — адміністраторка InGenium',
  },
  {
    name: 'Андрій Семененко',
    role: 'Адміністратор InGenium',
    description:
      'Випускник InGenium. З 2018 року бере участь у розвитку проєкту та організував очне навчання за програмою InGenium у Києві. Сьогодні супроводжує клієнтів, допомагає з вибором навчальних програм та організаційними питаннями.',
    image: '/images/about/andrii-semenenko.webp',
    alt: 'Андрій Семененко — розвиток InGenium Life в Україні',
  },
];

export default function AboutTeam() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Команда InGenium</p>

          <h2 className={css.title}>
            Люди, які працюють
            <span> над розвитком проєкту</span>
          </h2>

          <p className={css.description}>
            Разом з автором проєкту над InGenium працює команда, яка бере участь
            у створенні освітніх програм, викладанні, роботі з учасниками та
            розвитку різних напрямів проєкту.
          </p>
        </div>

        <div className={css.grid}>
          {team.map((member) => (
            <article className={css.card} key={member.name}>
              <div className={css.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 767px) 80vw, (max-width: 1024px) 40vw, 33vw"
                  className={css.image}
                />
              </div>

              <div className={css.content}>
                <h3 className={css.name}>{member.name}</h3>

                <p className={css.role}>{member.role}</p>

                <p className={css.text}>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

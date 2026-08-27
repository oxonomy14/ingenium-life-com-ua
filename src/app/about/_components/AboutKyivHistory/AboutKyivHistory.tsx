// src/app/about/_components/AboutKyivHistory/AboutKyivHistory.tsx

import Image from 'next/image';

import Container from '@/components/Container/Container';

import css from './AboutKyivHistory.module.css';

const photos = [
  {
    src: '/images/about/ingenium-kyiv-presentation-2018.webp',
    alt: 'Презентація курсу натальної астрології InGenium у Києві у 2018 році',
    caption:
      'Презентація курсу натальної астрології InGenium у Києві, 2018 рік',
  },
  {
    src: '/images/about/ingenium-kyiv-presentation-audience-2018.webp',
    alt: 'Учасники презентації курсу натальної астрології InGenium у Києві, 2018 рік',
    caption:
      'Учасники презентації курсу натальної астрології InGenium у Києві, 2018 рік',
  },
  {
    src: '/images/about/ingenium-kyiv-course-2018.webp',
    alt: 'Очне навчання натальної астрології InGenium у Києві, 2018 - 2019 рік',
    caption:
      'Очне навчання натальної астрології InGenium у Києві, 2018 - 2019 рік',
  },
  {
    src: '/images/about/ingenium-kyiv-students-2019.webp',
    alt: 'Студенти курсу натальної астрології InGenium у Києві, 2018 - 2019 рік',
    caption:
      'Студенти курсу натальної астрології InGenium у Києві, 2018 - 2019 рік',
  },
];

export default function AboutKyivHistory() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.header}>
          <p className={css.eyebrow}>Київ · 2018–2019</p>

          <h2 className={css.title}>InGenium у Києві</h2>

          <p className={css.description}>
            У 2018 році в Києві відбулася презентація InGenium та набір на очне
            навчання за авторською програмою натальної астрології Павла
            Дементьєва. Збереглися фотографії та відео цієї події, а також
            матеріали подальшого навчання київської групи.
          </p>
        </div>

        <div className={css.gallery}>
          {photos.map((photo) => (
            <figure className={css.figure} key={photo.src}>
              <div className={css.photo}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={css.image}
                />
              </div>

              <figcaption className={css.caption}>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className={css.videoBlock}>
          <div className={css.videoContent}>
            <p className={css.videoEyebrow}>Київ · 2018</p>

            <h3 className={css.videoTitle}>
              Презентація очного курсу натальної астрології
            </h3>

            <p className={css.videoDescription}>
              Архівне відео з презентації InGenium у Києві у 2018 році,
              присвяченої набору на очне навчання за авторською програмою курсу
              натальної астрології Павла Дементьєва.
            </p>
          </div>

          <div className={css.video}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/cM5YEh13uGk"
              title="Презентація очного курсу натальної астрології InGenium у Києві у 2018 році"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <div className={css.certificates}>
          <div className={css.certificatesHeader}>
            <p className={css.eyebrow}>Навчання та сертифікація</p>

            <h3 className={css.certificatesTitle}>Сертифікати InGenium</h3>

            <p className={css.certificatesDescription}>
              У 2018 році Андрій Семененко завершив навчання в InGenium, склав
              підсумковий іспит Павлу Дементьєву та отримав сертифікат найвищого
              ступеня. У 2019 році після завершення очної програми в Києві
              студенти також складали підсумковий іспит Павлу Дементьєву та
              отримували сертифікати InGenium.
            </p>
          </div>

          <div className={css.certificatesGrid}>
            <figure className={css.certificateFigure}>
              <div className={css.certificateImage}>
                <Image
                  src="/images/about/andrii-semenenko-ingenium-certificate-2018.webp"
                  alt="Сертифікат Андрія Семененка про завершення навчання в InGenium у 2018 році"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={css.image}
                />
              </div>

              <figcaption className={css.caption}>
                Сертифікат Андрія Семененка, InGenium, 2018 рік
              </figcaption>
            </figure>

            <figure className={css.certificateFigure}>
              <div className={css.certificateImage}>
                <Image
                  src="/images/about/ingenium-kyiv-student-certificate-2019.webp"
                  alt="Сертифікат випускника київської групи InGenium у 2019 році"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={css.image}
                />
              </div>

              <figcaption className={css.caption}>
                Сертифікат випускника київської групи InGenium, 2019 рік
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

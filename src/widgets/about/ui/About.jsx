import { about1, about2, about3 } from 'assets';

import styles from './About.module.scss';

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={(styles.about__title, 'visually-hidden')}>Про нас</h2>
      <ul className={styles.about__list}>
        <li className={styles.about__item}>
          <img
            src={about1}
            alt="Ми зовсім поруч"
            className={styles.about__item_img}
          />
          <h2 className={styles.about__item_title}>Ми зовсім поруч</h2>
          <p className={styles.about__item_text}>
            Тепер не треба шукати зони доставки. Доставка в м. Ірпінь, Буча,
            Гостомель та Ворзель
          </p>
        </li>
        <li className={styles.about__item}>
          <img
            src={about2}
            alt="Вага не має значеня"
            className={styles.about__item_img}
          />
          <h2 className={styles.about__item_title}>Вага не має значеня</h2>
          <p className={styles.about__item_text}>
            Не треба навантаувати себе. Ми доставимо все і скільки забажаєте
          </p>
        </li>
        <li className={styles.about__item}>
          <img
            src={about3}
            alt="Доставка до дверей"
            className={styles.about__item_img}
          />
          <h2 className={styles.about__item_title}>Доставка до дверей</h2>
          <p className={styles.about__item_text}>
            Вам більше не треба просити свого чоловіка сходити за свіженьким.
            Наші кур’єри доставлять все до ваших дверей
          </p>
        </li>
      </ul>
    </section>
  );
};
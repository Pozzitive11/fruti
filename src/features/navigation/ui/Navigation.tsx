import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { FC } from "react";

export const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a
            href="/#vegetables"
            className={styles.nav__link}
          >
            Овочі
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="/#fruits" className={styles.nav__link}>
            Фрукти
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="/#green" className={styles.nav__link}>
            Зелень
          </a>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/about">
            Про нас
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/delivery">
            Доставка та оплата
          </Link>
        </li>
      </ul>
    </nav>
  );
};

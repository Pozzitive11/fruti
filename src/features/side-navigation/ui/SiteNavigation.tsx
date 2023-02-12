import { SiteInfo } from "entities/site-info";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./SideNavigation.module.scss";

interface SideNavigationProps {
  visible: boolean;
};

export const SideNavigation: FC<SideNavigationProps> = ({
  visible,
}) => {
  const rootClasses = [styles.side_nav__wrapper];

  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div className={rootClasses.join(" ")}>
      <nav className={styles.side_nav}>
        <ul className={styles.side_nav__list}>
          <li className={styles.side_nav__item}>
            <a
              href="/#vegetables"
              className={styles.side_nav__link}
            >
              Овочі
            </a>
          </li>
          <li className={styles.side_nav__item}>
            <a
              href="/#fruits"
              className={styles.side_nav__link}
            >
              Фрукти
            </a>
          </li>
          <li className={styles.side_nav__item}>
            <a
              href="/#green"
              className={styles.side_nav__link}
            >
              Зелень
            </a>
          </li>
          <li className={styles.side_nav__item}>
            <Link
              className={styles.side_nav__link}
              to="/about"
            >
              Про нас
            </Link>
          </li>
          <li className={styles.side_nav__item}>
            <Link
              className={styles.side_nav__link}
              to="/delivery"
            >
              Доставка та оплата
            </Link>
          </li>
        </ul>
      </nav>
      <SiteInfo />
    </div>
  );
};

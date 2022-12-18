import 'app/index.css';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <a href="#home" className={styles.header__logo}>Fruti</a>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <a href="#vegetables" className={styles.header__link}>
                  Овочі
                </a>
              </li>
              <li className={styles.header__item}>
                <a href="#fruits" className={styles.header__link}>
                  Фрукти
                </a>
              </li>
              <li className={styles.header__item}>
                <a href="#green" className={styles.header__link}>
                  Зелень
                </a>
              </li>
              <li className={styles.header__item}>
                <a href="#about" className={styles.header__link}>
                  Про нас
                </a>
              </li>
              <li className={styles.header__item}>
                <a href="#pay" className={styles.header__link}>
                  Доставка та оплата
                </a>
              </li>
            </ul>
          </nav>
          <address className={styles.header__info}>
            <a className={styles.header__phone} href={'tel:0678337139'}>
              0678337139
            </a>
            <p className={styles.header__shudule}>Працюємо Пн-Сб,</p>
            <p className={styles.header__shudule}>Нд-вихідний</p>
          </address>
        </div>
      </div>
    </header>
  );
};

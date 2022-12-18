import styles from './Footer.module.scss';
import { pay } from 'assets';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__left}>
            <a href='#home' className={styles.footer__logo}>Fruti</a>
            <p className={styles.footer__text}>
              Доставка свіженького з турботою про Вас
            </p>
          </div>
          <div className={styles.footer__right}>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}>
                <a className={styles.footer__link} href="#vegetables">
                  Овочі
                </a>
              </li>
              <li className={styles.footer__item}>
                <a className={styles.footer__link} href="#fruits">
                  Фрукти
                </a>
              </li>
              <li className={styles.footer__item}>
                <a className={styles.footer__link} href="#green">
                  Зелень
                </a>
              </li>
              <li className={styles.footer__item}>
                <a className={styles.footer__link} href="#qwe">
                  Як це працює
                </a>
              </li>
            </ul>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}>
                <a className={styles.footer__link} href="#instagram">
                  Instagram
                </a>
              </li>
              <li className={styles.footer__item}>
                <a className={styles.footer__link} href="#facebook">
                  Facebook
                </a>
              </li>
              <li className={styles.footer__item}>
                <a href="#pay">
                  <img src={pay} alt="Сисеми оплати" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

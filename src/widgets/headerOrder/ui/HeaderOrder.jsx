import { burger } from "assets";
import { Button } from "shared/ui/button/Button";

import "app/index.css";
import styles from "./HeaderOrder.module.scss";
import { Link } from "react-router-dom";

export const HeaderOrder = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Link to="/" className={styles.header__logo}>
            Fruti
          </Link>
          <Button classes={styles.button}>
            <img src={burger} alt="Відкрити навігацію" />
          </Button>
          <address className={styles.header__info}>
            <a className={styles.header__phone} href={"tel:0678337139"}>
              0678337139
            </a>
            <p className={styles.header__shedule}>Працюємо Пн-Сб,</p>
            <p className={styles.header__shedule}>Нд-вихідний</p>
          </address>
        </div>
      </div>
    </header>
  );
};

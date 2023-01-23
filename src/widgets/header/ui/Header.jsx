import { burger } from "assets";
import { Button } from "shared/ui/button/Button";

import "app/index.css";
import styles from "./Header.module.scss";
import { Navigation } from "features/navigation";
import { Logo } from "shared/logo/Logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo />
          <Button classes={styles.button}>
            <img src={burger} alt="Відкрити навігацію" />
          </Button>
          <Navigation />
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

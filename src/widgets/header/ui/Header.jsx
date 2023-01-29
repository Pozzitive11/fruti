import { burger } from "assets";
import { Button } from "shared/ui/button/Button";

import "app/index.css";
import styles from "./Header.module.scss";
import { Navigation } from "features/navigation";
import { Logo } from "shared/logo/Logo";
import { SiteInfo } from "entities/site-info";

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
          <SiteInfo />
        </div>
      </div>
    </header>
  );
};

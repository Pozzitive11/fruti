import { burger, burgerClose } from "assets";
import { Button } from "shared/ui/button/Button";

import "app/index.css";
import styles from "./Header.module.scss";
import { Navigation } from "features/navigation";
import { Logo } from "shared/logo/Logo";
import { SiteInfo } from "entities/site-info";
import { useState } from "react";
import { SideNavigation } from "features/side-navigation";

export const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo />
          <Button onClick={() => setVisible(!visible)} classes={styles.button}>
            {visible ? (
              <img src={burgerClose} alt="Закрити навігацію" />
            ) : (
              <img src={burger} alt="Відкрити навігацію" />
            )}
          </Button>
          <SideNavigation visible={visible} />
          <Navigation />
          <SiteInfo />
        </div>
      </div>
    </header>
  );
};

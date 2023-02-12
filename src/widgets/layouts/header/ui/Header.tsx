import { burger, burgerClose } from "assets";
import { Button } from "shared/ui/button/Button";

import "app/index.css";
import styles from "./Header.module.scss";
import { Navigation } from "features/navigation";
import { Logo } from "shared/ui/logo/Logo";
import { SiteInfo } from "entities/site-info";
import { FC, useState } from "react";
import { SideNavigation } from "features/side-navigation";

export const Header: FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo />
          <Button
            onClick={() => setVisible(!visible)}
            classes={styles.button}
          >
            {visible ? (
              <img src={burger} alt="Відкрити навігацію" />
            ) : (
              <img
                src={burgerClose}
                alt="Закрити навігацію"
              />
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

import "app/index.css";
import styles from "./HeaderOrder.module.scss";
import { Logo } from "shared/ui/logo/Logo";
import { SiteInfo } from "entities/site-info";

export const HeaderOrder = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo />
          <SiteInfo />
        </div>
      </div>
    </header>
  );
};

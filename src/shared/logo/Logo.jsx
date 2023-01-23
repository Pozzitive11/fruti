import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      Fruti
    </Link>
  );
};

import styles from "./SiteInfo.module.scss";

export const SiteInfo = () => {
  return (
    <address className={styles.header__info}>
      <a className={styles.header__phone} href={"tel:0678337139"}>
        0678337139
      </a>
      <p className={styles.header__shedule}>Працюємо Пн-Сб,</p>
      <p className={styles.header__shedule}>Нд-вихідний</p>
    </address>
  );
};

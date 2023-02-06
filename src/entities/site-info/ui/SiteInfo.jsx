import styles from "./SiteInfo.module.scss";

export const SiteInfo = () => {
  return (
    <address className={styles.info}>
      <a className={styles.info__phone} href={"tel:0678337139"}>
        0678337139
      </a>
      <p className={styles.info__schedule}>Працюємо Пн-Сб,</p>
      <p className={styles.info__schedule}>Нд-вихідний</p>
    </address>
  );
};

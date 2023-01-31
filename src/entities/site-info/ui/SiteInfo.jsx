import styles from "./SiteInfo.module.scss";

export const SiteInfo = () => {
  return (
    <address className={styles.info}>
      <a className={styles.info__phone} href={"tel:0678337139"}>
        0678337139
      </a>
      <p className={styles.info__shedule}>Працюємо Пн-Сб,</p>
      <p className={styles.info__shedule}>Нд-вихідний</p>
    </address>
  );
};

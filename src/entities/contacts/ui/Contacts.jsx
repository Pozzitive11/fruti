import { Input } from "shared/ui/input/Input";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.contacts__list}>
      <label className={styles.contacts__label}>
        Прізвище
        <Input required classes={styles.contacts__input} />
      </label>
      <label className={styles.contacts__label}>
        Ім’я
        <Input required classes={styles.contacts__input} />
      </label>
      <label className={styles.contacts__label}>
        Мобільний телефон
        <Input required classes={styles.contacts__input} />
      </label>
      <label className={styles.contacts__label}>
        Адреса
        <Input required classes={styles.contacts__input} />
      </label>
    </div>
  );
};

import cn from "classnames";
import { Field } from "formik";
import { FC } from "react";
import styles from "./Contacts.module.scss";

interface ContactsProps {
  errors: any;
  touched: any;
};

export const Contacts: FC<ContactsProps> = ({
  errors,
  touched,
}) => {
  return (
    <div className={styles.contacts__list}>
      <label className={styles.contacts__label}>
        Прізвище
        <Field
          name="secondName"
          className={cn(styles.contacts__input, {
            [styles.contacts__input_error]:
              errors.secondName && touched.secondName,
          })}
        />
        {errors.secondName && touched.secondName && (
          <div className={styles.contacts__error}>
            {errors.secondName}
          </div>
        )}
      </label>
      <label className={styles.contacts__label}>
        Ім’я
        <Field
          name="firstName"
          className={cn(styles.contacts__input, {
            [styles.contacts__input_error]:
              errors.firstName && touched.firstName,
          })}
        />
        {errors.firstName && touched.firstName && (
          <div className={styles.contacts__error}>
            {errors.firstName}
          </div>
        )}
      </label>
      <label className={styles.contacts__label}>
        Мобільний телефон
        <Field
          name="phone"
          className={cn(styles.contacts__input, {
            [styles.contacts__input_error]:
              errors.phone && touched.phone,
          })}
        />
        {errors.phone && touched.phone && (
          <div className={styles.contacts__error}>
            {errors.phone}
          </div>
        )}
      </label>
      <label className={styles.contacts__label}>
        Адреса
        <Field
          name="address"
          className={cn(styles.contacts__input, {
            [styles.contacts__input_error]:
              errors.address && touched.address,
          })}
        />
        {errors.address && touched.address && (
          <div className={styles.contacts__error}>
            {errors.address}
          </div>
        )}
      </label>
    </div>
  );
};

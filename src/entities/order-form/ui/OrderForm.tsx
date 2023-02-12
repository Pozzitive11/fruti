import styles from "./OrderForm.module.scss";
import "yup-phone";
import { Input } from "shared/ui/input/Input";
import { OrderAside } from "widgets/order-aside";
import { Form, Formik } from "formik";
import cn from "classnames";
import { Contacts } from "entities/contacts";
import { DeliverySchedule } from "entities/delivery-schedule";
import { Textarea } from "shared/ui/textarea/Textarea";
import { validationSchema } from "../config/validation.config";

export const OrderForm = () => {
  return (
    <div className={styles.form}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          secondName: "",
          firstName: "",
          phone: "+380",
          address: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.form__contacts}>
              <h2
                className={cn(
                  styles.form__subtitle,
                  styles.form__contacts_subtitle
                )}
              >
                Ваші контактні дані
              </h2>
              <Contacts touched={touched} errors={errors} />
            </div>
            <div className={styles.form__information}>
              <h2
                className={cn(
                  styles.form__subtitle,
                  styles.form__information_subtitle
                )}
              >
                Інформація про доставку
              </h2>
              <DeliverySchedule />
              <div
                className={cn(
                  styles.form__information_comment,
                  styles.information_comment
                )}
              >
                <h4
                  className={
                    styles.information_comment__title
                  }
                >
                  Коментар
                </h4>
                <Textarea
                  placeholder="Наприклад: картоплю не дуже мілку, або уточнення адреси"
                  classes={
                    styles.information_comment__textarea
                  }
                />
                <label
                  className={
                    styles.information_comment__label
                  }
                >
                  <Input
                    type="checkbox"
                    classes={
                      styles.information_comment__checkbox
                    }
                  />
                  Мені можна не телефонувати для
                  підтвердження замовлення.
                </label>
              </div>
            </div>
            <div className={styles.form__payment}>
              <h3
                className={cn(
                  styles.form__subtitle,
                  styles.form__payment_subtitle
                )}
              >
                Спосіб оплати
              </h3>
              <label className={styles.form__payment_label}>
                <Input
                  type="radio"
                  name="payment"
                  classes={styles.form__payment_radio}
                  defaultChecked={true}
                />
                Кредитною карткою
              </label>
              <label className={styles.form__payment_label}>
                <Input
                  type="radio"
                  name="payment"
                  classes={styles.form__payment_radio}
                />
                Готівкою при отриманні
              </label>
            </div>
            <OrderAside />
          </Form>
        )}
      </Formik>
    </div>
  );
};

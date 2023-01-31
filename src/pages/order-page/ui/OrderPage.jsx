import styles from "./OrderPage.module.scss";

import OrderList from "widgets/order-list/ui/OrderList";
import { Input } from "shared/ui/input/Input";
import { Form } from "shared/ui/form/Form";
import { Contacts } from "entities/contacts";
import { DeliveryShedule } from "entities/delivery-shedule";
import { Textarea } from "shared/ui/textarea/Textarea";
import cn from "classnames";
import { OrderAside } from "widgets/order-aside";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsRedux } from "app/store/productsSlice";

export default function OrderPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsRedux());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <main className="container">
        <div className="order">
          <h1 className={styles.order__title}>Оформлення замовлення</h1>
          <div className={styles.order__wrapper}>
            <div className={styles.order__left}>
              <OrderList classes={styles.order__list} />
              <div className={styles.order__info}>
                <p className={styles.order__text}>
                  Заповніть контактну інформацію та оберіть зручний для вас день
                  та час доставки. У день доставки з вами зв'яжеться курьер за
                  годину до прибуття.
                </p>
                <p className={styles.order__text}>
                  При замовленні <b>від 500 грн - доставка безконтовна!</b>
                </p>
              </div>
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
                  <Contacts />
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
                  <DeliveryShedule />
                  <div
                    className={cn(
                      styles.form__information_comment,
                      styles.information_comment
                    )}
                  >
                    <h4 className={styles.information_comment__title}>
                      Коментар
                    </h4>
                    <Textarea
                      placeholder="Наприклад: картоплю не дуже мілку, або уточнення адреси"
                      classes={styles.information_comment__textarea}
                    />
                    <label className={styles.information_comment__label}>
                      <Input
                        type="checkbox"
                        classes={styles.information_comment__checkbox}
                      />
                      Мені можна не телефонувати для підтвердження замовлення.
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
              </Form>
            </div>
            <OrderAside />
          </div>
        </div>
      </main>
    </div>
  );
}

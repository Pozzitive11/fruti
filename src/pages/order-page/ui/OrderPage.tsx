import { useEffect } from "react";
import { getProductsRedux } from "app/store/productsSlice";
import { OrderList } from "widgets/order-list";

import styles from "./OrderPage.module.scss";
import { useAppDispatch } from "shared/hooks/redux-hooks";
import { OrderForm } from "widgets/order-form";

export const OrderPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsRedux());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <main className="container">
        <div className="order">
          <h1 className={styles.order__title}>
            Оформлення замовлення
          </h1>
          <div className={styles.order__wrapper}>
            <div className={styles.order__left}>
              <OrderList classes={styles.order__list} />
              <div className={styles.order__info}>
                <p className={styles.order__text}>
                  Заповніть контактну інформацію та оберіть
                  зручний для вас день та час доставки. У
                  день доставки з вами зв'яжеться курьер за
                  годину до прибуття.
                </p>
                <p className={styles.order__text}>
                  При замовленні
                  <b> від 500 грн - доставка безконтовна!</b>
                </p>
              </div>
              <OrderForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

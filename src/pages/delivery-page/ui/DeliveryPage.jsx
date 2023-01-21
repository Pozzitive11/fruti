import cn from "classnames";
import styles from "./DeliveryPage.module.scss";
import { delivery, payment } from "assets";

export const DeliveryPage = () => {
  return (
    <main className="container">
      <div className={styles.payment}>
        <div className={cn(styles.payment__content, styles.content)}>
          <h2 className={cn(styles.payment__title, styles.title)}>
            Оплата замовлення
          </h2>
          <p className={cn(styles.payment__text, styles.text)}>
            Ви можете розрахуватися з кур’єром при отриманні вашого замовлення
            або оплатити замовлення за допомогою сервісу Privat24 або Monobank.
            Реквізити i суму до сплати ми повідомимо вам після підтвердження
            замовлення.
          </p>
        </div>
        <img width="486" height="450" src={payment} alt="Оплата замовлення" />
      </div>
      <div className={styles.delivery}>
        <div className={cn(styles.delivery__content, styles.content)}>
          <h2 className={cn(styles.delivery__title, styles.title)}>Доставка</h2>
          <p className={cn(styles.delivery__text, styles.text)}>
            Доставка здійснюється в м. Ірпінь, Буча, Гостомель та Ворзель з
            11-20:00. Вартість достаки - 50 гривень. При замволенні на суму від
            500 гривень доставка безкоштовна.
          </p>
        </div>
        <img width="486" height="450" src={delivery} alt="Доставка" />
      </div>
    </main>
  );
};

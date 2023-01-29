import { Button } from "shared/ui/button/Button";
import styles from "./OrderAside.module.scss";

export const OrderAside = () => {
  return (
    <aside className={styles.order__aside}>
      <h2 className={styles.order__aside_title}>Разом</h2>
      <div className={styles.order__aside_worth}>
        Товар на суму <span className={styles.order__aside_price}>267.23 грн</span>
      </div>
      <div className={styles.order__aside_delivery}>
        Вартість доставки <span className={styles.order__aside_price}>50 грн</span>
      </div>
      <div className={styles.order__aside_paid}>
        До сплати <span className={styles.order__aside_price}>317.23 грн</span>
      </div>
      <Button classes={styles.order__aside_button}>
        Замовлення підтверджую
      </Button>
    </aside>
  );
};

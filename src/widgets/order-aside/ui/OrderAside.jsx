import {
  calculateFullprice,
  mapProductsForSumUp,
} from "features/calculate-products-quantity/lib/utils";
import { useSelector } from "react-redux";
import { useCart } from "shared/hooks";
import { Button } from "shared/ui/button/Button";
import styles from "./OrderAside.module.scss";

const deliveryPrice = 50;

export const OrderAside = () => {
  const [cartProducts] = useCart();

  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.isloading);
  const produtsToBuy = cartProducts?.map((cartProducts) =>
    products?.find((product) => cartProducts.id === product.id)
  );

  let fullprice = 0;
  if (!productsStatus) {
    fullprice = calculateFullprice(
      mapProductsForSumUp(produtsToBuy, cartProducts)
    );
  }

  const priceWithDelivery = +fullprice + +deliveryPrice;

  return (
    <aside className={styles.order__aside}>
      <h2 className={styles.order__aside_title}>Разом</h2>
      <div className={styles.order__aside_worth}>
        Товар на суму{" "}
        <span className={styles.order__aside_price}>{fullprice} грн</span>
      </div>
      <div className={styles.order__aside_delivery}>
        Вартість доставки{" "}
        <span className={styles.order__aside_price}>{deliveryPrice} грн</span>
      </div>
      <div className={styles.order__aside_paid}>
        До сплати{" "}
        <span className={styles.order__aside_price}>
          {priceWithDelivery.toFixed(2)} грн
        </span>
      </div>
      <Button classes={styles.order__aside_button}>
        Замовлення підтверджую
      </Button>
    </aside>
  );
};

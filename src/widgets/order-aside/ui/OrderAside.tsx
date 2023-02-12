import { OrderModal } from "widgets/order-modal";
import {
  calculateFullprice,
  mapProductsForSumUp,
} from "features/calculate-products-quantity/lib/utils";
import { useCart } from "shared/hooks";
import { useAppSelector } from "shared/hooks/redux-hooks";
import { deliveryPrice } from "../config";
import styles from "./OrderAside.module.scss";
import { FC } from "react";
import { CartItemType } from "entities/cart/models/cart.model";
import { Product } from "entities/product";

export const OrderAside: FC = () => {
  const [cartProducts] = useCart();

  const products = useAppSelector(
    (state) => state.products.products
  );
  const isProductsLoading = useAppSelector(
    (state) => state.products.isloading
  );
  const productsToBuy = cartProducts?.map(
    (cartProduct: CartItemType) =>
      products?.find(
        (product) => cartProduct.id === product.id
      ) as Product
  );

  let fullprice = 0;
  if (isProductsLoading) {
    fullprice = calculateFullprice(
      mapProductsForSumUp(productsToBuy, cartProducts)
    );
  }

  const priceWithDelivery = fullprice + +deliveryPrice;

  return (
    <>
      <aside className={styles.order__aside}>
        <h2 className={styles.order__aside_title}>Разом</h2>
        <div className={styles.order__aside_worth}>
          Товар на суму{" "}
          <span className={styles.order__aside_price}>
            {fullprice} грн
          </span>
        </div>
        <div className={styles.order__aside_delivery}>
          Вартість доставки{" "}
          <span className={styles.order__aside_price}>
            {deliveryPrice} грн
          </span>
        </div>
        <div className={styles.order__aside_paid}>
          До сплати{" "}
          <span className={styles.order__aside_price}>
            {priceWithDelivery.toFixed(2)} грн
          </span>
        </div>
        <OrderModal />
      </aside>
    </>
  );
};

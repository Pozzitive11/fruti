import { Product } from "entities/product";
import { CalculateProductsQuantity } from "features/calculate-products-quantity";
import { FC } from "react";
import styles from "./CartItem.module.scss";


export const CartItem: FC<Product> = ({
  id,
  img,
  price,
  origin,
  title,
  type,
}) => {
  return (
    <li className={styles.cart__item}>
      <img
        src={require(`assets/${type}/${img}`)}
        alt={title}
        className={styles.cart__item_img}
      />
      <div className={styles.cart__item_content}>
        <p className={styles.cart__item_title}>{title}</p>
        <p className={styles.cart__item_origin}>
          Країна походження: {origin}
        </p>
      </div>
      <CalculateProductsQuantity id={id} price={price} />
    </li>
  );
};

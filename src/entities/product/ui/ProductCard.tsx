import { CalculateProductsQuantity } from "features/calculate-products-quantity";
import { FC } from "react";
import { Product } from "../models/product.model";
import styles from "./ProductCard.module.scss";

export const ProductCard: FC<Product> = ({
  id,
  title,
  origin,
  price,
  img,
  type,
}) => {
  return (
    <li key={id} className={styles.product__item}>
      <img
        src={require(`assets/${type}/${img}`)}
        alt={title}
        className={styles.product__item_img}
      />
      <h3 className={styles.product__item_name}>{title}</h3>
      <p className={styles.product__item_origin}>
        Країна походження: {origin}
      </p>

      <CalculateProductsQuantity price={price} id={id} />
    </li>
  );
};

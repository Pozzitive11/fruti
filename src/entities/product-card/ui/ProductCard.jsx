import { NumberOfProducts } from "features/number-of-products";
import styles from "./ProductCard.module.scss";

export const ProductCard = ({ id, title, origin, price, img, type }) => {
  return (
    <li key={id} className={styles.product__item}>
      <img
        src={require(`assets/${type}/${img}`)}
        alt={title}
        className={styles.product__item_img}
      />
      <h3 className={styles.product__item_name}>{title}</h3>
      <p className={styles.product__item_origin}>Країна походження: {origin}</p>

      <NumberOfProducts price={price} id={id} />
    </li>
  );
};

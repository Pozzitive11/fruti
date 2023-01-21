import { NumberOfProducts } from "features/number-of-products";
import styles from "./BasketCard.module.scss";
import { useState } from "react";

import { usePersistedState } from "shared/usePersistedState";

export const BasketCard = ({ id, img, price, origin, title, type }) => {
  const [productsInBasket] = usePersistedState([], "products");

  const [numberOfProducts, setNumberOfProducts] = useState(
    productsInBasket?.find((item) => item.id === id)?.numberOfProducts ?? 0
  );

  return (
    <li className={styles.basket__item}>
      <img
        src={require(`assets/${type}/${img}`)}
        alt={title}
        className={styles.basket__item_img}
      />
      <div className={styles.basket__item_content}>
        <p className={styles.basket__item_title}>{title}</p>
        <p className={styles.basket__item_origin}>
          Країна походження: {origin}
        </p>
      </div>
      <NumberOfProducts
        numberOfProducts={numberOfProducts}
        setNumberOfProducts={setNumberOfProducts}
        id={id}
        price={price}
      />
    </li>
  );
};

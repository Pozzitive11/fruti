import { NumberOfProducts } from 'features/number-of-products';
import styles from './SearchCard.module.scss';
import { useState } from 'react';
import { usePersistedState } from "shared/usePersistedState";

export const SearchCard = ({ title, price, img, id,type }) => {
  const [productsInBasket] = usePersistedState([], "products");

  const [numberOfProducts, setNumberOfProducts] = useState(
    productsInBasket?.find((item) => item.id === id)?.numberOfProducts ?? 0
  );

  return (
    <li className={styles.search__result_item} key={title}>
      <img
        className={styles.search__result_img}
        src={require(`assets/${type}/${img}`)}
        alt={title}
      />
      <h2 className={styles.search__result_name}>{title}</h2>
      <NumberOfProducts
        numberOfProducts={numberOfProducts}
        setNumberOfProducts={setNumberOfProducts}
        price={price}
        id={id}
      />
    </li>
  );
};

import { NumberOfProducts } from "features/number-of-products";
import styles from "./SearchCard.module.scss";

export const SearchCard = ({ title, price, img, id, type }) => {
  return (
    <li className={styles.search__result_item} key={title}>
      <img
        className={styles.search__result_img}
        src={require(`assets/${type}/${img}`)}
        alt={title}
      />
      <h2 className={styles.search__result_name}>{title}</h2>
      <NumberOfProducts price={price} id={id} />
    </li>
  );
};

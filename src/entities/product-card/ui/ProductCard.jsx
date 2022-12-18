import { useState } from 'react';
import styles from './ProductCard.module.scss';
import { AddToBasket } from 'features/add-to-basket/ui/AddToBasket';
import { NumberOfProducts } from 'features/number-of-products';

export const ProductCard = ({ id, title, origin, price, img }) => {
  const [ifAddToBasket, setIfAddToBasket] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const [productPrice, setProductPrice] = useState(price);


  const addProduct = () => {
    setNumberOfProducts(numberOfProducts + 1);
    setProductPrice((+price + price * numberOfProducts).toFixed(2));
  };

  const minusProduct = () => {
    setNumberOfProducts(numberOfProducts - 1);
    setProductPrice((productPrice - price).toFixed(2));
  };

  const addToBasket = () => {
    setIfAddToBasket(true);
  };
  return (
    <li key={id} className={styles.product__item}>
      <img
        src={`${process.env.PUBLIC_URL}/assests/veg/${img}`}
        alt={title}
        className={styles.product__item_img}
      />
      <h3 className={styles.product__item_name}>{title}</h3>
      <p className={styles.product__item_origin}>Країна походження: {origin}</p>
      <p className={styles.product__item_price}>{productPrice} грн</p>

      {numberOfProducts === 0 ? (
        <div className={styles.product__item_bottom}>
          <span className={styles.product__item_counter}>за 1 кг</span>
          <AddToBasket onClick={addToBasket} />
        </div>
      ) : ifAddToBasket ? (
        <NumberOfProducts
          addProduct={addProduct}
          minusProduct={minusProduct}
          numberOfProducts={numberOfProducts}
        />
      ) : (
        <div className={styles.product__item_bottom}>
          <span className={styles.product__item_counter}>за 1 кг</span>
          <AddToBasket onClick={addToBasket} />
        </div>
      )}
    </li>
  );
};

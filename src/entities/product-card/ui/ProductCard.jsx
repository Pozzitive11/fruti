import { useState } from 'react';

import { NumberOfProducts } from 'features/number-of-products';
import { Button } from 'shared/ui/button/Button';
import { basketButton } from 'assets';
import styles from './ProductCard.module.scss';

export const ProductCard = ({ id, title, origin, price, img }) => {
  const [ifAddToBasket, setIfAddToBasket] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const [productPrice, setProductPrice] = useState(price);

  const product = {
    id,
    price,
    numberOfProducts,
  };

  const addProduct = () => {
    setNumberOfProducts(numberOfProducts + 1);
    setProductPrice((+price + price * numberOfProducts).toFixed(2));
    localStorage.setItem(title, JSON.stringify(product));
  };

  const minusProduct = () => {
    setNumberOfProducts(numberOfProducts - 1);
    setProductPrice((productPrice - price).toFixed(2));
    localStorage.setItem(title, JSON.stringify(product));
  };

  
  const addToBasket = () => {
    setIfAddToBasket(true);
    localStorage.setItem(title, JSON.stringify(product));
  };

  const deleteFromBasket = () => {
    setIfAddToBasket(false);
    localStorage.removeItem(title, JSON.stringify(product));
  };

  return (
    <li key={id} className={styles.product__item}>
      <img
        src={require(`assets/${img}`)}
        alt={title}
        className={styles.product__item_img}
      />
      <h3 className={styles.product__item_name}>{title}</h3>
      <p className={styles.product__item_origin}>Країна походження: {origin}</p>
      <p className={styles.product__item_price}>{productPrice} грн</p>

      {ifAddToBasket ? (
        <NumberOfProducts
          deleteFromBasket={deleteFromBasket}
          addToBasket={addToBasket}
          addProduct={addProduct}
          minusProduct={minusProduct}
          numberOfProducts={numberOfProducts}
        />
      ) : (
        <div className={styles.product__item_bottom}>
          <span className={styles.product__item_counter}>за 1 кг</span>
          <Button classes={styles.button} onClick={addToBasket}>
            <img src={basketButton} alt="Додати товар до кошику" />
          </Button>
        </div>
      )}
    </li>
  );
};

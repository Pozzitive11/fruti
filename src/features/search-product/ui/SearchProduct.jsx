import { useState } from 'react';

import { Input } from 'shared/ui/input/Input';
import { Button } from 'shared/ui/button/Button';
import { basketButton } from 'assets';

import styles from './SearchProduct.module.scss';

export const SearchProduct = ({ products }) => {
  const [searchingProducts, setSearchingProducts] = useState('');

  const searchProduct = (e) => {
    setSearchingProducts(e.target.value);
  };

  const filteredProduct = products.filter((item) => {
    return item.title.toLowerCase().includes(searchingProducts.toLowerCase());
  });

  return (
    <div className={styles.search}>
      <Input
        onChange={searchProduct}
        value={searchingProducts}
        placeholder="Томати, огірок..."
        classes={styles.input}
      />
      {searchingProducts && (
        <ul className={styles.search__result}>
          {filteredProduct.map(({ title, price, img }) => (
            <li className={styles.search__result_item} key={title}>
              <img
                className={styles.search__result_img}
                src={require(`assets/${img}`)}
                alt={title}
              />
              <h2 className={styles.search__result_name}>{title}</h2>
              <p className={styles.search__result_price}>{price} грн</p>
              <Button classes={styles.button}>
                <img src={basketButton} alt="Додати товар до кошику" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

import { useState } from "react";

import { Input } from "shared/ui/input/Input";
import { SearchCard } from "entities/search-card";

import styles from "./SearchProducts.module.scss";
import "shared/styles/search-products.scss";

export const SearchProducts = ({ products }) => {
  const [searchingProducts, setSearchingProducts] = useState("");

  const handleSearchInput = ({ target }) => {
    setSearchingProducts(target.value);
  };

  const filteredProduct = products.filter((item) => {
    return item.title.toLowerCase().includes(searchingProducts.toLowerCase());
  });

  return (
    <div className="search">
      <Input
        onChange={handleSearchInput}
        value={searchingProducts}
        placeholder="Томати, огірок..."
        classes={styles.input}
      />
      {searchingProducts && (
        <ul className={styles.search__result}>
          {filteredProduct.map(({ title, price, img, id, type }) => (
            <SearchCard
              key={id}
              title={title}
              price={price}
              img={img}
              id={id}
              type={type}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

// <li className={styles.search__result_item} key={title}>
//   <img
//     className={styles.search__result_img}
//     src={require(`assets/${img}`)}
//     alt={title}
//   />
//   <h2 className={styles.search__result_name}>{title}</h2>
//   <NumberOfProducts
//     deleteFromBasket={deleteFromBasket}
//     addToBasket={addToBasket}
//     addProduct={addProduct}
//     minusProduct={minusProduct}
//     numberOfProducts={numberOfProducts}
//   />
//   <p className={styles.search__result_price}>
//     {(price * (numberOfProducts || 1)).toFixed(2)} грн
//   </p>
//   <Button classes={styles.button} onClick={addToBasket}>
//     <img src={basketButton} alt="Додати товар до кошику" />
//   </Button>
// </li>

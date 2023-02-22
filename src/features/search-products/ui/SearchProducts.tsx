import { FC, useState } from "react";

import { Input } from "shared/ui/input/Input";
import { Product, SearchCard } from "entities/product";

import styles from "./SearchProducts.module.scss";
import "shared/styles/search-products.scss";

interface SearchProductsProps {
  products: Product[];
}

export const SearchProducts: FC<SearchProductsProps> = ({
  products,
}) => {
  const [searchingProducts, setSearchingProducts] =
    useState<string>("");

  const filteredProduct = products.filter((product) =>
    product?.title
      .toLowerCase()
      .startsWith(searchingProducts.toLowerCase())
  );

  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchingProducts(e.target.value);
  };

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
          {filteredProduct.map(
            ({ title, price, img, id, type }) => (
              <SearchCard
                key={id}
                title={title}
                price={price}
                img={img}
                id={id}
                type={type}
              />
            )
          )}
        </ul>
      )}
    </div>
  );
};

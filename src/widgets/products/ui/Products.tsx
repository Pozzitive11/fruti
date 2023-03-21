import { Product } from "entities/product";
import { ProductCard } from "entities/product/ui/ProductCard";
import { FC } from "react";
import { Loader } from "shared/ui/loader/Loader";

import styles from "./Products.module.scss";

interface ProductsProps {
  id: string;
  title: string;
  products: Product[];
  isProductsLoading: boolean;
}
export const Products: FC<ProductsProps> = ({
  id,
  title,
  products,
  isProductsLoading,
}) => {
  return (
    <section id={id} className={styles.products}>
      <h2 className={styles.products__title}>{title}</h2>
      {isProductsLoading ? (
        <ul className={styles.products__list}>
          {products.map(
            ({ id, title, origin, price, img, type }) => (
              <ProductCard
                key={id}
                id={id}
                title={title}
                origin={origin}
                price={price}
                img={img}
                type={type}
              />
            )
          )}
        </ul>
      ) : (
        <Loader />
      )}
    </section>
  );
};

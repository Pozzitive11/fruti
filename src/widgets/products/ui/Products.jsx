import { ProductCard } from 'entities/product-card/ui/ProductCard';

import styles from './Products.module.scss';

const Products = ({ id, title, products }) => {
  return (
    <section id={id} className={styles.products}>
      <h2 className={styles.products__title}>{title}</h2>
      <ul className={styles.products__list}>
        {products
          .filter((item) => item.type === `${id}`)
          .map(({ id, title, origin, price, img }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              origin={origin}
              price={price}
              img={img}
            />
          ))}
      </ul>
    </section>
  );
};

export default Products;

import { useState } from "react";

import { BasketCard } from "entities/basket-card";

import { Button } from "shared/ui/button/Button";
import { Modal } from "shared/ui/modal/Modal";

import styles from "./Basket.module.scss";

import { usePersistedState } from "shared/usePersistedState";
import { Link } from "react-router-dom";

export const Basket = ({ products }) => {
  const [modal, setModal] = useState(false);

  const [productsInBasket] = usePersistedState([], "products");

  //   const productsToBuy = productsInBasket?.map((productInBasket) =>
  //     products?.find((product) => product.id === productInBasket.id)
  //   );

  const fullprice = 0;

  return (
    <>
      <Button onClick={() => setModal(true)} classes={styles.button}>
        <div className={styles.products__number}>{productsInBasket.length}</div>
      </Button>
      <Modal visible={modal} setVisible={setModal} classes={styles.modal}>
        <div className="basket">
          <div className={styles.basket__name}>Корзина</div>
          <ul className={styles.basket__list}>
            {products.map(({ id, img, price, origin, title, type }) => (
              <BasketCard
                key={id}
                id={id}
                type={type}
                img={img}
                price={price}
                origin={origin}
                title={title}
              />
            ))}
          </ul>
        </div>
        <div className={styles.basket__fullprice}>
          Сума: {fullprice.toFixed(2)} грн
        </div>
        <Link to="/order" classes={styles.order_button}>
          Оформити замовлення
        </Link>
      </Modal>
    </>
  );
};

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   const getProducts = async () => {
//     setProducts(await getProductsData());
//   };
//   getProducts();
// }, []);

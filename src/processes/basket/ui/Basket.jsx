import { useState } from "react";
import { useCart } from "shared/hooks";

import { Link } from "react-router-dom";

import { BasketCard } from "entities/basket-card";

import { Button } from "shared/ui/button/Button";
import { Loader } from "shared/ui/loader/Loader";
import { Modal } from "shared/ui/modal/Modal";

import styles from "./Basket.module.scss";

export const Basket = ({ products, productsStatus }) => {
  const [modal, setModal] = useState(false);
  const [cartProducts] = useCart();

  const produtsToBuy = cartProducts?.map((cartProducts) =>
    products?.find((product) => cartProducts.id === product.id)
  );

  const productsPrice = produtsToBuy.map((produtToBuy) => produtToBuy?.price);

  const productsQuantity = cartProducts.map(
    (cartProduct) => cartProduct?.quantity
  );

  let fullprice = 0;
  for (let i = 0; i < productsPrice.length; i++) {
    fullprice += productsPrice[i] * productsQuantity[i];
  }

  return (
    <>
      <Button onClick={() => setModal(true)} classes={styles.button}>
        <div className={styles.products__number}>{cartProducts.length}</div>
      </Button>
      <Modal visible={modal} setVisible={setModal} classes={styles.modal}>
        <div className="basket">
          <div className={styles.basket__name}>Корзина</div>
          {productsStatus ? (
            <Loader />
          ) : (
            <ul className={styles.basket__list}>
              {produtsToBuy?.map(({ id, img, price, origin, title, type }) => (
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
          )}
        </div>
        <div className={styles.basket__fullprice}>
          Сума: {fullprice.toFixed(2)} грн
        </div>
        <Link to="/order" className={styles.order_button}>
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

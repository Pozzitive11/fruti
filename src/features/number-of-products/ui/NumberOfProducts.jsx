import { useEffect, useRef, useState } from "react";

import { Button } from "shared/ui/button/Button";
import { Modal } from "shared/ui/modal/Modal";

import { minusButton, plusButton, deleteButton, basketButton } from "assets";
import {
  addProduct,
  minusProduct,
  getProductQuantityById,
} from "features/number-of-products";

import styles from "./NumberOfProducts.module.scss";
import "shared/styles/number-of-products.scss";

import { deepClone } from "shared/utils";
import { useCart } from "shared/hooks";

export function NumberOfProducts({ id, price }) {
  const [modal, setModal] = useState(false);
  const [cartProducts, setCartProducts] = useCart();
  const [productQuantity, setProductQuantity] = useState(
    getProductQuantityById(cartProducts, id)
  );

  useEffect(() => {
    setProductQuantity(getProductQuantityById(cartProducts, id));
  }, [cartProducts, id]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleProduct = ({ target }) => {
    const currentProductIndex = cartProducts.findIndex(
      (product) => product.id === id
    );
    const button = target.closest("button");
    switch (button.dataset.button) {
      case "add":
        addProduct({
          currentProductIndex,
          currentProducts: cartProducts,
          id,
          setProducts: setCartProducts,
        });
        break;
      case "minus":
        minusProduct({
          currentProductIndex,
          currentProducts: cartProducts,
          id,
          setProducts: setCartProducts,
        });
        closeModal();
        break;
      default:
        break;
    }
  };

  return (
    <div className="number-of-products">
      <p className="number-of-products__price">
        {(price * (productQuantity || 1)).toFixed(2)} грн
      </p>
      {productQuantity ? (
        <div className="number-of-products__wrapper">
          <div className="number-of-products__price-static">{price} грн</div>
          <div className="number-of-products__count">за 1 кг</div>
          <div className={styles.buttons}>
            {productQuantity === 1 ? (
              <Button onClick={openModal}>
                <img src={deleteButton} alt={"Видалити"} />
              </Button>
            ) : (
              <Button onClick={handleProduct} data-button="minus">
                <img src={minusButton} alt={"Мінус"} />
              </Button>
            )}

            <span className={styles.number}>
              {productQuantity}
              кг
            </span>

            <Button onClick={handleProduct} data-button="add">
              <img src={plusButton} alt={"Плюс"} />
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.buy}>
          <span className={styles.counter}>за 1 кг</span>
          <Button
            classes={styles.button}
            onClick={handleProduct}
            data-button="add"
          >
            <img src={basketButton} alt="Додати товар до кошику" />
          </Button>
        </div>
      )}
      <Modal
        visible={modal}
        setVisible={setModal}
        classes={styles.modal__content}
      >
        <p className={styles.modal__text}>Видалити товар?</p>
        <div className={styles.modal__buttons}>
          <Button
            classes={styles.button}
            onClick={handleProduct}
            data-button="minus"
          >
            Так
          </Button>
          <Button classes={styles.button} onClick={closeModal}>
            Ні
          </Button>
        </div>
      </Modal>
    </div>
  );
}

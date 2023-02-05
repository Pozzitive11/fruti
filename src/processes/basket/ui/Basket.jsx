import { useState } from "react";
import { useCart } from "shared/hooks";

import { Link } from "react-router-dom";

import { Button } from "shared/ui/button/Button";
import { Modal } from "shared/ui/modal/Modal";

import styles from "./Basket.module.scss";
import { OrderList } from "widgets/order-list";

export const Basket = () => {
  const [modal, setModal] = useState(false);
  const [cartProducts] = useCart();

  return (
    <>
      <Button onClick={() => setModal(true)} classes={styles.button}>
        <div className={styles.products__number}>{cartProducts.length}</div>
      </Button>
      <Modal visible={modal} setVisible={setModal} classes={styles.modal}>
        <div className="basket">
          <div className={styles.basket__name}>Корзина</div>
          <OrderList />
        </div>

        <Link to="/order" className={styles.basket__button_order}>
          Оформити замовлення
        </Link>
      </Modal>
    </>
  );
};

import { basketImg } from "assets";
import styles from "./OrderModal.module.scss";
import { Link } from "react-router-dom";
import { Modal } from "shared/ui/modal/Modal";
import { Button } from "shared/ui/button/Button";
import { useState } from "react";

export const OrderModal = () => {
  const [modal, setModal] = useState(false);

  const clearStorage = () => {
    localStorage.clear();
  };
  return (
    <>
      <Button
        onClick={() => setModal(true)}
        type="submit"
        classes={styles.order__modal_button}
      >
        Замовлення підтверджую
      </Button>
      <Modal visible={modal} setVisible={setModal} classes={styles.modal}>
        <div className={styles.order__modal_content}>
          <img
            className={styles.order__modal_img}
            src={basketImg}
            alt="Дякуємо за замовлення!"
          />
          <h2 className={styles.order__modal_title}>Дякуємо за замовлення!</h2>
          <p className={styles.order__modal_text}>
            Ми отримали Ваше замволення та вже готуємо до відправлення
          </p>
          <Link
            onClick={clearStorage}
            to="/"
            className={styles.order__modal_button}
          >
            На головну
          </Link>
        </div>
      </Modal>
    </>
  );
};

import styles from './NumberOfProducts.module.scss';
import { minusButton, plusButton, deleteButton } from 'assets';
import { Button } from 'shared/ui/button/Button';
import { useState } from 'react';

import { Modal } from 'shared/ui/modal/Modal';

// import Modal from 'react-modal';

export function NumberOfProducts({
  minusProduct,
  addProduct,
  numberOfProducts,
  deleteFromBasket,
}) {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className={styles.container}>
      {numberOfProducts === 1 ? (
        <Button onClick={openModal}>
          <img src={deleteButton} alt={'Видалити'} />
        </Button>
      ) : (
        <Button onClick={minusProduct}>
          <img src={minusButton} alt={'Мінус'} />
        </Button>
      )}
      <span className={styles.number}>{numberOfProducts} кг</span>
      <Button onClick={addProduct}>
        <img src={plusButton} alt={'Плюс'} />
      </Button>

      <Modal
        visible={modal}
        setVisible={setModal}
        classes={styles.modal__content}
        onClick={openModal}
      >
        <p className={styles.modal__text}>Видалити товар?</p>
        <div className={styles.modal__buttons}>
          <Button classes={styles.button} onClick={deleteFromBasket}>
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

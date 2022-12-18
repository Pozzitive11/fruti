import styles from './NumberOfProducts.module.scss';
import { minusButton, plusButton, deleteButton } from 'assets';
import { ProductCardButton } from 'shared/ui/product-card-button/ProductCardButton';
import { DeleteProduct } from 'features/delete-product/';
import { useState } from 'react';

import Modal from 'react-modal';

export function NumberOfProducts({
  minusProduct,
  addProduct,
  numberOfProducts,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [smth, setSmth] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deletesmth() {
    setIsOpen(true);

    setSmth(true);
  }

  return (
    <div className={styles.container}>
      {numberOfProducts === 1 ? (
        <ProductCardButton
          onClick={deletesmth}
          img={deleteButton}
          alt={'Видалити'}
        />
      ) : (
        <ProductCardButton
          onClick={minusProduct}
          img={minusButton}
          alt={'Мінус'}
        />
      )}
      <span className={styles.number}>{numberOfProducts} кг</span>
      <ProductCardButton onClick={addProduct} img={plusButton} alt={'Плюс'} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles.modal}
      >
        <div>I am a modal</div>
        <button onClick={closeModal}>Tak</button>
        <button onClick={closeModal}>Ni</button>
      </Modal>
    </div>
  );
}

// src={numberOfProducts === 1 ? deleteButton : minusButton}

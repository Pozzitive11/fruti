import styles from './DeleteProduct.module.scss';

export const DeleteProduct = ({ visible, setVisible, onClick }) => {
  const rootClasses = [styles.popup];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={styles.popup__content}
        onClick={(e) => e.stopPropagation()}
      >
        <p>Видалити товар?</p>
        <button onClick={() => onClick}>Tak</button>
        <button onClick={() => setVisible(false)}>Ni</button>
      </div>
    </div>
  );
};


import styles from './ProductCardButton.module.scss';

export function ProductCardButton({ onClick, img, alt }) {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={img} alt={alt} />
    </button>
  );
}

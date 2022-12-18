import { addToBasket } from 'assets';
import styles from './AddToBasket.module.scss';


export const AddToBasket = ({onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={addToBasket} alt="Додати товар до кошику" />
    </button>
  );
};

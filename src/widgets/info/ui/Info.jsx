import { info1, info2, info3 } from 'assets';

import styles from './Info.module.scss';

const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__left}>
        <h2 className={styles.info__title}>
          Як це працює? <br />
          Доставка та оплата
        </h2>
        <ul className={styles.info__left_list}>
          <li className={styles.info__left_item}>
            Доставка замовлення здійснюється на наступний день, після
            підтвердження заявки з 10.00 до 20.00 крім неділі.
          </li>
          <li className={styles.info__left_item}>
            Доставка здійснюється за адресою вказаною при оформленні замовлення.
          </li>
          <li className={styles.info__left_item}>
            Час доставки обговорюється з менеджером, в момент підтвердження
            замовлення.
          </li>
          <li className={styles.info__left_item}>
            Вартість доставки 50 грн по м. Ірпінь, Буча, Гостомель та Ворзель.
          </li>
        </ul>
      </div>
      <div className={styles.info__right}>
        <ul className={styles.info__right_list}>
          <li className={styles.info__right_item}>
            <img src={info1} alt="" className={styles.info__right_item_img} />
            <h3 className={styles.info__right_item_title}>
              Ви робите замовлення
            </h3>
            <p className={styles.info__right_item_text}>
              Обираєте бажані товари і додаєте їх в корзину
            </p>
          </li>
          <li className={styles.info__right_item}>
            <img src={info2} alt="" className={styles.info__right_item_img} />
            <h3 className={styles.info__right_item_title}>
              Ми збираємо товари
            </h3>
            <p className={styles.info__right_item_text}>
              Ми збираємо, упаковуємо та готуємо до відправки товари на складі
            </p>
          </li>
          <li className={styles.info__right_item}>
            <img src={info3} alt="" className={styles.info__right_item_img} />
            <h3 className={styles.info__right_item_title}>
              Кур'єр доставляє замовлення
            </h3>
            <p className={styles.info__right_item_text}>
              Доставляємо замовлення до дверей в зручний для вас час і день
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Info;
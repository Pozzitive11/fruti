import { useEffect, useState } from 'react';

import { ProductCard } from 'entities/product-card/ui/ProductCard';
import { AboutCard } from 'entities/about-card/ui/AboutCard';
import { getData } from '../api/getData';

import { info1, info2, info3 } from 'assets';

import styles from './Product.module.scss';

const Product = () => {
  const [about, setAbout] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [green, setGreen] = useState([]);

  useEffect(() => {
    getData('products/').then((res) => {
      setVegetables(res.filter((item) => item.type === 'vegetable'));
      setFruits(res.filter((item) => item.type === 'fruit'));
      setGreen(res.filter((item) => item.type === 'green'));
    });

    getData('about/').then((res) => setAbout(res));
  }, []);

  return (
    <>
      <section id="about" className={styles.about}>
        <h2 className={(styles.about__title, 'visually-hidden')}>Про нас</h2>
        <ul className={styles.about__list}>
          {about.map(({ id, title, content, img }) => (
            <AboutCard
              key={id}
              id={id}
              title={title}
              content={content}
              img={img}
            />
          ))}
        </ul>
      </section>
      <section id="vegetables" className={styles.products}>
        <h2 className={styles.products__title}>Овочі</h2>
        <ul className={styles.products__list}>
          {vegetables.map(({ id, title, origin, price, img }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              origin={origin}
              price={price}
              img={img}
            />
          ))}
        </ul>
      </section>
      <section id="fruits" className={styles.products}>
        <h2 className={styles.products__title}>Фрукти</h2>
        <ul className={styles.products__list}>
          {fruits.map(({ id, title, origin, price, img }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              origin={origin}
              price={price}
              img={img}
            />
          ))}
        </ul>
      </section>
      <section id="green" className={styles.products}>
        <h2 className={styles.products__title}>Зелень</h2>
        <ul className={styles.products__list}>
          {green.map(({ id, title, origin, price, img }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              origin={origin}
              price={price}
              img={img}
            />
          ))}
        </ul>
      </section>
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
              Доставка здійснюється за адресою вказаною при оформленні
              замовлення.
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
    </>
  );
};

export default Product;

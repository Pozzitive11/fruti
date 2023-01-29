import { useCart } from "shared/hooks";
import { BasketCard } from "entities/basket-card";
import { Loader } from "shared/ui/loader/Loader";

import styles from "./OrderList.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

export default function OrderList({ classes }) {
  const [cartProducts] = useCart();

    const products = useSelector((state) => state.products.products);
    const productsStatus = useSelector((state) => state.products.isloading);

  const produtsToBuy = cartProducts?.map((cartProducts) =>
    products?.find((product) => cartProducts.id === product.id)
  );

  const productsPrice = produtsToBuy?.map((produtToBuy) => produtToBuy?.price);

  const productsQuantity = cartProducts?.map(
    (cartProduct) => cartProduct?.quantity
  );

  let fullprice = 0;
  for (let i = 0; i < productsPrice.length; i++) {
    fullprice += productsPrice[i] * productsQuantity[i];
  }
  return (
    <div className={styles.order__wrapper}>
      {productsStatus ? (
        <Loader />
      ) : (
        <ul className={cn(classes, styles.order__list)}>
          {produtsToBuy?.map(({ id, img, price, origin, title, type }) => (
            <BasketCard
              key={id}
              id={id}
              type={type}
              img={img}
              price={price}
              origin={origin}
              title={title}
            />
          ))}
        </ul>
      )}
      <div className={styles.order__fullprice}>
        Сума: {fullprice.toFixed(2)} грн
      </div>
    </div>
  );
}

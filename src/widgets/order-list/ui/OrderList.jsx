import { useCart } from "shared/hooks";
import { BasketCard } from "entities/basket-card";
import { Loader } from "shared/ui/loader/Loader";

import styles from "./OrderList.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import {
  calculateFullprice,
  mapProductsForSumUp,
} from "features/calculate-products-quantity/lib/utils";

export default function OrderList({ classes }) {
  const [cartProducts] = useCart();

  const products = useSelector((state) => state.products.products);

  const productsStatus = useSelector((state) => state.products.isloading);

  const produtsToBuy = cartProducts?.map((cartProducts) =>
    products?.find((product) => cartProducts.id === product.id)
  );

  let fullprice = 0;
  if (!productsStatus) {
    fullprice = calculateFullprice(
      mapProductsForSumUp(produtsToBuy, cartProducts)
    );
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
      <div className={styles.order__fullprice}>Сума: {fullprice} грн</div>
    </div>
  );
}

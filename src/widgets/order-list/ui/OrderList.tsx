import { useCart } from "shared/hooks";
import { Loader } from "shared/ui/loader/Loader";

import styles from "./OrderList.module.scss";
import cn from "classnames";
import {
  calculateFullprice,
  mapProductsForSumUp,
} from "features/calculate-products-quantity/lib/utils";
import { FC } from "react";
import { useAppSelector } from "shared/hooks/redux-hooks";
import { Product } from "entities/product";
import { CartItemType } from "entities/cart/models/cart.model";
import { CartItem } from "entities/cart/ui/CartItem";

interface OrderListProps {
  classes?: any;
}

export const OrderList: FC<OrderListProps> = ({
  classes,
}) => {
  const [cartProducts] = useCart();

  const products = useAppSelector(
    (state) => state.products.products
  );
  const isProductsLoading = useAppSelector(
    (state) => state.products.isloading
  );

  const productsToBuy = cartProducts?.map(
    (cartProduct: CartItemType) =>
      products?.find(
        (product) => cartProduct.id === product.id
      ) as Product
  );

  let fullprice = 0;
  if (isProductsLoading) {
    fullprice = calculateFullprice(
      mapProductsForSumUp(productsToBuy, cartProducts)
    );
  }

  return (
    <div className={styles.order__wrapper}>
      {isProductsLoading ? (
        <ul className={cn(classes, styles.order__list)}>
          {productsToBuy?.map(
            ({
              id,
              img,
              price,
              origin,
              title,
              type,
            }: Product) => (
              <CartItem
                key={id}
                id={id}
                type={type}
                img={img}
                price={price}
                origin={origin}
                title={title}
              />
            )
          )}
        </ul>
      ) : (
        <Loader />
      )}
      <div className={styles.order__fullprice}>
        Сума: {fullprice.toFixed(2)} грн
      </div>
    </div>
  );
};

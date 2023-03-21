import { FC, useEffect } from "react";

import { getProductsRedux } from "app/store/productsSlice";
import { SearchProducts } from "features/search-products";
import { About } from "widgets/about";
import { Products } from "widgets/products";
import { Info } from "widgets/info";
import { useCart } from "shared/hooks";
import { Basket } from "processes/basket";
import { productTypes } from "../config";
import {
  useAppDispatch,
  useAppSelector,
} from "shared/hooks/redux-hooks";
import { BtnScrollUp } from "features/btn-scroll-up";

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const [cartProducts] = useCart();

  const products = useAppSelector(
    (state) => state.products.products
  );
  console.log(products);
  

  const isProductsLoading = useAppSelector(
    (state) => state.products.isloading
  );

  useEffect(() => {
    dispatch(getProductsRedux());
  }, [dispatch]);


  return (
    <div className="wrapper">
      <main className="container">
        <SearchProducts products={products} />
        <About />
        <div className="page__img"></div>
        {productTypes.map(({ id, title }) => (
          <Products
            isProductsLoading={isProductsLoading}
            key={id}
            title={title}
            id={id}
            products={products.filter(
              (item) => item.type === id
            )}
          />
        ))}
        <div className="page__img"></div>
        <Info />
        {cartProducts.length > 0 && <Basket />}
      </main>
      <BtnScrollUp />
    </div>
  );
};

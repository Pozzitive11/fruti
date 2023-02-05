import { useEffect } from "react";
import BtnScrollUp from "features/btn-scroll-up/ui/BtnScrollUp";
// import styles from "./HomePage.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { getProductsRedux } from "app/store/productsSlice";
import { SearchProducts } from "features/search-products";
import { About } from "widgets/about";
import { Products } from "widgets/products";
import { Info } from "widgets/info";
import { useCart } from "shared/hooks";
import { Basket } from "processes/basket";
import { productTypes } from "../config";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [cartProducts] = useCart();
  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.isloading);

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
            productsStatus={productsStatus}
            key={id}
            title={title}
            id={id}
            products={products.filter((item) => item.type === id)}
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

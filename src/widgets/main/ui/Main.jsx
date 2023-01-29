import { useSelector } from "react-redux";
import { useCart } from "shared/hooks";

import Products from "widgets/products/ui/Products";
import { SearchProducts } from "features/search-products";
import { About } from "widgets/about";
import { Info } from "widgets/info";
import { Basket } from "processes/basket";

const productTypes = [
  {
    id: "vegetables",
    title: "Овочі",
  },
  {
    id: "fruits",
    title: "Фрукти",
  },
  {
    id: "green",
    title: "Зелень",
  },
];

export const Main = () => {
  const [cartProducts] = useCart();
  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.isloading);

  return (
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
  );
};

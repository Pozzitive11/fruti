import Products from "widgets/products/ui/Products";
import { SearchProducts } from "features/search-products";
import { About } from "widgets/about";
import { Info } from "widgets/info";
import { Basket } from "processes/basket";

import { useSelector } from "react-redux";
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
  const products = useSelector((state) => state.products.products);

  return (
    <main className="container">
      <SearchProducts products={products} />
      <About />
      <div className="page__img"></div>
      {productTypes.map(({ id, title }) => (
        <Products
          key={id}
          title={title}
          id={id}
          products={products.filter((item) => item.type === id)}
        />
      ))}
      <div className="page__img"></div>
      <Info />
      <Basket products={products} />
    </main>
  );
};

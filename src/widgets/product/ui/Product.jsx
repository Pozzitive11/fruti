import { useEffect, useState } from 'react';

import Products from 'widgets/products/ui/Products';
import { SearchProduct } from 'features/search-product/ui/SearchProduct';
import { getProductsData } from 'widgets/products/api/getProductsData';
import { About } from 'widgets/about';
import Info from 'widgets/info/ui/Info';

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getProductsData());
    };
    getProducts();
  }, []);

  return (
    <>
      <SearchProduct products={products} />
      <About />
      <div className="page__img"></div>
      <Products id="vegetable" title="Овочі" products={products} />
      <Products id="fruit" title="Фрукти" products={products} />
      <Products id="green" title="Зелень" products={products} />
      <div className="page__img"></div>
      <Info />
    </>
  );
};

import { Cart, ProductToBuy } from "entities/cart/models";
import { Product } from "entities/product";

export const calculateFullprice = (
  products: ProductToBuy[]
): number =>
  products?.reduce(
    (
      sum: number,
      {
        quantity,
        price,
      }: { quantity: number; price: number }
    ) => sum + quantity * price,
    0
  );

export const mapProductsForSumUp = (
  dbProducts: Product[],
  cartProducts: Cart
): ProductToBuy[] =>
  cartProducts?.map(({ id, quantity }) => {
    const originalProduct = dbProducts?.find(
      (product) => id === product.id
    );
    return {
      quantity,
      price: Number(originalProduct?.price),
    };
  });

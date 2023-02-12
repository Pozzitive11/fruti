import { Cart } from "entities/cart/models";
import {
  AddCartItemDto,
  DeleteCartItemDto,
  MinusCartItemDto,
} from "entities/cart/models/cart.dto";
import { deepClone } from "shared/utils";

export const addProduct = ({
  currentProductIndex,
  currentProducts,
  id,
  setProducts,
}: AddCartItemDto): void => {
  let productsToSave = deepClone(currentProducts);

  if (currentProductIndex === -1) {
    const productToAdd = {
      id,
      quantity: 1,
    };

    productsToSave.push(productToAdd);
  } else {
    ++productsToSave[currentProductIndex].quantity;
  }
  setProducts(productsToSave);
};

export const minusProduct = ({
  currentProductIndex,
  currentProducts,
  setProducts,
}: MinusCartItemDto): void => {
  if (currentProductIndex === -1) {
    return;
  }
  let productsToSave = deepClone(currentProducts);

  --productsToSave[currentProductIndex].quantity;
  setProducts(productsToSave);
};

export const deleteProduct = ({
  currentProducts,
  id,
  setProducts,
}: DeleteCartItemDto): void => {
  let productsToSave = deepClone<Cart>(currentProducts);

  productsToSave = productsToSave.filter(
    (product) => product.id !== id
  );
  setProducts(productsToSave);
};

export const getProductQuantityById = (
  products: Cart,
  productId: string
): number => {
  return (
    products.find((product) => product.id === productId)
      ?.quantity ?? 0
  );
};

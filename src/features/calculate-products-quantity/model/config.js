import { deepClone } from "shared/utils";

export const addProduct = ({
  currentProductIndex,
  currentProducts,
  id,
  setProducts,
}) => {
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
}) => {
  if (currentProductIndex === -1) {
    return;
  }
  let productsToSave = deepClone(currentProducts);

  --productsToSave[currentProductIndex].quantity;
  setProducts(productsToSave);
};

export const deleteProduct = ({ currentProducts, id, setProducts }) => {
  let productsToSave = deepClone(currentProducts);

  productsToSave = productsToSave.filter((product) => product.id !== id);
  setProducts(productsToSave);
};

export const getProductQuantityById = (products, productId) => {
  return products.find((product) => product.id === productId)?.quantity ?? 0;
};

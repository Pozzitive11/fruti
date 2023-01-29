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
  //   localStorage.setItem("products", JSON.stringify(products));
};

export const minusProduct = ({
  currentProductIndex,
  currentProducts,
  id,
  setProducts,
  closeModal,
}) => {
  if (currentProductIndex === -1) {
    return;
  }
  let productsToSave = deepClone(currentProducts);

  if (productsToSave[currentProductIndex].quantity === 1) {
    productsToSave = productsToSave.filter((product) => product.id !== id);
  } else {
    --productsToSave[currentProductIndex].quantity;
  }
  setProducts(productsToSave);
  closeModal();
  //   localStorage.setItem("products", JSON.stringify(products));
};

export const getProductQuantityById = (products, productId) => {
  return products.find((product) => product.id === productId)?.quantity ?? 0;
};

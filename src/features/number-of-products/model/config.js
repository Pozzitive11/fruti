import { deepClone } from "shared/utils";

export const addProduct = ({
  currentProductIndex,
  currentProducts,
  id,
  setProductsInBasket,
}) => {
  let productsToSave = deepClone(currentProducts);
//   console.log({ currentProducts, id, currentProductIndex, productsToSave });
  if (currentProductIndex === -1) {
    const productToAdd = {
      id,
      numberOfProducts: 1,
    };

    productsToSave.push(productToAdd);
  } else {
    productsToSave[currentProductIndex].numberOfProducts++;
  }
  setProductsInBasket(productsToSave);
  //   localStorage.setItem("products", JSON.stringify(products));
};

export const minusProduct = ({
  currentProductIndex,
  currentProducts,
  id,
  setProductsInBasket,
}) => {
  if (currentProductIndex === -1) {
    return;
  }
  let productsToSave = deepClone(currentProducts);

  if (productsToSave[currentProductIndex].numberOfProducts === 1) {
    productsToSave = productsToSave.filter((product) => product.id !== id);
  } else {
    productsToSave[currentProductIndex].numberOfProducts--;
  }
  setProductsInBasket(productsToSave);

  //   localStorage.setItem("products", JSON.stringify(products));
};

export const calculateFullprice = (produtsToBuy, cartProducts) => {
  const productsPrice = produtsToBuy?.map((produtToBuy) => produtToBuy?.price);

  const productsQuantity = cartProducts?.map(
    (cartProduct) => cartProduct?.quantity
  );
  let fullprice = 0;

  for (let i = 0; i < productsPrice.length; i++) {
    fullprice += productsPrice[i] * productsQuantity[i];
  }
  return fullprice.toFixed(2);
};

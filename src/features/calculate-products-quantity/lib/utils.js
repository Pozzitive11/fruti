export const calculateFullprice = (products) =>
  products
    ?.reduce((sum, { quantity, price }) => sum + quantity * price, 0)
    .toFixed(2);

export const mapProductsForSumUp = (dbProducts, cartProducts) =>
  cartProducts?.map(({ id, quantity }) => {
    const originalProduct = dbProducts?.find((product) => id === product.id);
    return { quantity, price: originalProduct.price };
  });

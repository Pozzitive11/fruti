import { getData } from 'shared/api/api';

export const getProductsData = async () => {
  return await getData('products/');
};

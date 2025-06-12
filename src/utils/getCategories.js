// utils/getCategories.js
const getCategories = (products) => {
  return [...new Set(products.map(product => product.category))];
};

export default getCategories;

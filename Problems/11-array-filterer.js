// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
let products = [
  { id: 1, name: "Keyboard", price: 49 },
  { id: 2, name: "Monitor", price: 150 },
  { id: 3, name: "Mouse", price: 25 },
];

let filterCriterion = { maxPrice: 100 };
let result = products.filter((product) => {
  if (product.price < filterCriterion.maxPrice) {
    return product;
  }
});

console.log(result);

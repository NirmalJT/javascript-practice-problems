// 13. The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(cartItems) {
  let total = 0;
  cartItems.map((item) => {
    total = total + item.price * item.quantity;
  });
  return total;
}
const cartItems = [
  { name: "T-shirt", price: 20, quantity: 2 },
  { name: "Jeans", price: 40, quantity: 1 },
  { name: "Sneakers", price: 60, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 },
];

let total = calculateTotal(cartItems);
console.log(`Total cost is : ${total}`);

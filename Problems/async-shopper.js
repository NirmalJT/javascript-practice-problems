// 9. The Asynchronous Shopper:
//Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
function async_shopper(product) {
  let randomSec = Math.trunc(Math.random() * 6 + 1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your order of product ${product} is placed`);
    }, randomSec * 1000);
  });
}

function placeOrder(product) {
  async_shopper(product).then(console.log);
}
let product = "laptop";
placeOrder(product);

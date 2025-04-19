// 10. The Coffee Machine:
//In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(coffee) {
  let randomDelay = Math.trunc(Math.random() * 5 + 1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your ${coffee} is ready`);
    }, randomDelay * 1000);
  });
}

function coffee_machine(coffee) {
  brewCoffee(coffee).then(console.log);
}
let coffee = "Cappuccino";
coffee_machine(coffee);

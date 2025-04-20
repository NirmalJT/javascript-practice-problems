// 5. The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum_selector(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number < 0) {
      break;
    }
    sum = sum + number;
  }
  console.log(sum);
}
let numbers = [1, 2, -3, -1];
sum_selector(numbers);

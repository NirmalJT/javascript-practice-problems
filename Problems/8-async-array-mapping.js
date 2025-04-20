// 8. Async Array Mapping:
//Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function async_array_mapping(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(number * 2);
    }, 500);
  });
}
async function fn() {
  let numbers = [1, 2, 3, 4];

  let promises = numbers.map((number) => async_array_mapping(number));
  let result = await Promise.all(promises);
  console.log(result);
}
fn();

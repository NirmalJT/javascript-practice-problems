// 2. The Double Trouble:
//You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function double_trouble(numbers) {
  let array = [];
  let lastElement = null;
  numbers.forEach((number) => {
    if (number !== lastElement) {
      array.push(number * 2);
      lastElement = number;
    } else {
      array.push(number);
    }
  });
  console.log(array);
}

let numbers = [1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9];
double_trouble(numbers);

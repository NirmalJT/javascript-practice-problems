// 3. The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirror_mirror_1(str) {
  let strArray = str.split("");

  let rev_strArray = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    rev_strArray.push(strArray[i]);
  }
  rev_strArray = rev_strArray.join("");
  let result = str + rev_strArray;
  console.log(result);
}
//method 2
function mirror_mirror_2(str) {
  let revStr = str.split("").reverse().join("");
  let result = str + revStr;
  console.log(result);
}
let str = "Nirmal";
mirror_mirror_1(str);

mirror_mirror_2(str);

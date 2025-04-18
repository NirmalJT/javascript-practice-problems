// 6. The Vowel Counter:
//You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function count_vowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  let strArr = str.split("");
  let count = 0;

  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (vowels[i] === strArr[j]) {
        count++;
      }
    }
  }
  console.log(count);
}
let str = "NirmalJyotiThakuria";
count_vowel(str);

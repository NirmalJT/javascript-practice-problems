// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

//method 1
function password_validator(password) {
  let lowercase = /[a-z]/;
  let uppercase = /[A-Z]/;
  let digit = /\d/;
  let isUppercase = uppercase.test(password);
  let isLowercase = lowercase.test(password);
  let isDigit = digit.test(password);
  if (isUppercase && isLowercase && isDigit) {
    console.log(`Your password : ${password} is a valid password`);
  } else {
    console.log(`Your password : ${password} is not a valid password`);
  }
}

let password = "bIrddsI";
password_validator(password);

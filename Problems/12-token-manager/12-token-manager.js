// 12. The Token Manager:
// You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

console.log("helllo");
function setAuthToken(token, expiresInSec) {
  let expiryTime = Date.now() + expiresInSec * 1000;
  let tokenData = {
    token,
    expiry: expiryTime,
  };
  localStorage.setItem("authToken", JSON.stringify(tokenData));
  console.log(`your token is ${token} your login session has start`);
}
function getAuthToken() {
  let token = JSON.parse(localStorage.getItem("authToken"));
  if (!token) return null;
  if (Date.now() > token.expiry) {
    localStorage.removeItem("authToken");
    console.log(`Your session is end`);
    return null;
  }
  return token.token;
}
let token = "jdghush121jds";
setAuthToken(token, 5);
setTimeout(() => {
  let token = getAuthToken();
  if (!token) {
    console.log("your session is end and your token also removed");
  } else {
    console.log(`your token is ${token}`);
  }
}, 6000);

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  const checkPassword = password===correctPassword ? "Access granted" : "Access denied, wrong password!";
  return checkPassword;
}

console.log(checkPassword("asdfg"));
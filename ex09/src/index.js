function myFunction(myObj, checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }

  return "Not Found";
}
module.exports = myFunction;

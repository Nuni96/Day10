function myFunction(x) {
  var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar",
  };
  delete lion[x];
  return lion;
}

myFunction("roar");
module.exports = myFunction;

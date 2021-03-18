var myPet = {
    species: "Samoyed",
    name: "Pujdo",
    legs: 4,
    friends: ["Mujo", "Suljo"]
};

function myFunction(myObj){
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
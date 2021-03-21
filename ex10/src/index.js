function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Esad Plavi",
      title: "Seherzada",
      release_year: 1989,
      formats: {
        1: "Ploca",
        2: "velika ploca",
        3: "blueRay",
      },
      id: 69
    },
  };

  return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;

var femaleNames = ["Asia", "Kasia", "Ola", "Sylwia", "Ania"];
var maleNames = ["Filip", "Piotr", "Bartek", "Michal", "Kuba"];

var femaleMaleNames = femaleNames.concat(maleNames);
console.log(femaleMaleNames);

var newName = "Jarek";

var indexOfNewName = femaleMaleNames.indexOf(newName);

if (indexOfNewName === -1) {
    femaleMaleNames.push(newName);
}

console.log(femaleMaleNames);

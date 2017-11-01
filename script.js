var femaleNames = ["Asia", "Kasia", "Ola", "Sylwia", "Ania"];
var maleNames = ["Filip", "Piotr", "Bartek", "Michal", "Kuba"];

var femaleMaleNames = femaleNames.concat(maleNames);
console.log(femaleMaleNames);


var newName = "Jarek";

var namesWithoutNew = femaleMaleNames.indexOf(newName);

if (namesWithoutNew === -1) {
	var femaleMaleNamesPlus = femaleMaleNames.push(newName);
}

console.log(femaleMaleNames);

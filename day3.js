/*À l'aide de la .toString()méthode, convertissez le tableau en chaîne.*/

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
let tableTrie = []
let permut;
numbers.toString()

/*À l'aide de la .join()méthode, convertissez le tableau en chaîne. Essayez de transmettre différentes valeurs dans la jointure.
Par exemple .join("+"), .join(" "), .join("")*/
numbers.join("+")
numbers.join(" ")
numbers.join("")

/*Bonus : Pour ce faire, regardez comment travailler avec des ...*/
console.log("tableinitial", numbers)
var verifNumber;
do {
    verifNumber = false;

    console.log("avant", verifNumber)
    for (var i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < numbers[i + 1]) {
            var tmp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = tmp;
            verifNumber = true;
            console.log("après", verifNumber)
        }
    }
} while (verifNumber);


console.log("resultat", numbers)
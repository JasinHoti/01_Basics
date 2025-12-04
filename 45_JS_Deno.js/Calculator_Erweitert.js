let number1 = prompt("Gib die erste Zahl ein");
let number2 = prompt("Gib die zweite Zahl ein");

let number1AsNumber = parseInt(number1);
let number2AsNumber = parseInt(number2);

let selection = prompt(
  "press 1 to Add, Press 2 to Supstract, Press 3 to Multipicate, Press 4 to divide"
);
let selectionAsNumber = parseInt(selection);

let result = 0;
if (selectionAsNumber == 1) {
  result = number1AsNumber + number2AsNumber;
} else if (selectionAsNumber == 2) {
  result = number1AsNumber - number2AsNumber;
} else if (selectionAsNumber == 3) {
  result = number1AsNumber * number2AsNumber;
} else if (selectionAsNumber == 4) {
  result = number1AsNumber / number2AsNumber;
} else console.log("not a vallid selection");

console.log(result);

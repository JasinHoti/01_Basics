let number1 = prompt("Gib die erste Zahl ein");
let number2 = prompt("Gib die zweite Zahl ein")

let number1AsNumber = parseInt(number1);
let number2AsNumber = parseInt(number2);

console.log("Zahl1:" + number1 + "Zahl2:" + number2);

let result = number1AsNumber + number2AsNumber
console.log("Result; " + result)
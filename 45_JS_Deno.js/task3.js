let number1 = prompt ("Gib die erste Zahl ein")
let number2 = prompt ("Gib die zweite Zahl ein")

let number1AsNumber = parseInt(number1);
let number2AsNumber = parseInt(number2);

let selection = prompt(
    "Üress 1 to add, Press 2 to supstract, Press 3 to multiplie, Press 4 do divide"
)

let selectionAsNumber = parseInt(selection);

let result = 0
if (selectionAsNumber == 1){
result = number1AsNumber + number2AsNumber
}else if (selectionAsNumber == 2){
    result = number1AsNumber - number2AsNumber
}else console.log("not a vallid selection");

console.log(result);

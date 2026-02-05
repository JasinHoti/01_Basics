// Variablen
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let apfelgewicht = 0.34;
let bananegewicht = 0.22;


// Preisberechnung
let result1 = (apfelgewicht * 8 * applePricePerKilo)
let result2 = (bananegewicht * 17 * bananaPricePerKilo)
let result3 = (apfelgewicht * 17 * bananaPricePerKilo)
let result4 = (bananaPricePerKilo * 1000)
let result5 = (applePricePerKilo * 1000)

// Ausgabe
console.log("Preis von 17 Bananen ist: " + result2 + " €");
console.log("Preis von 8 Äpfeln ist: " + result1 + " €");
console.log("Preis pro Tonne Bananen: " + result4 + " €");
console.log("Preis pro Tonne Apfel: " + result5 + " €");


let grades = prompt("Wieviel Prozent hast du in deinem Test?");

let gradesAsNumber = Number(grades);
console.log(gradesAsNumber);

let result = 0;

if (gradesAsNumber == 90 || gradesAsNumber > 90) {
  console.log("You have an A!");
}
if (
  gradesAsNumber == 80 ||
  (gradesAsNumber > 80 && gradesAsNumber < 89) ||
  gradesAsNumber == 89
) {
  console.log("You have an B!");
}
if (
  gradesAsNumber == 70 ||
  (gradesAsNumber > 70 && gradesAsNumber < 79) ||
  gradesAsNumber == 79
) {
  console.log("You have an C!");
}
if (
  gradesAsNumber == 60 ||
  (gradesAsNumber > 60 && gradesAsNumber < 69) ||
  gradesAsNumber == 69
) {
  console.log("You have an D!");
} else console.log("You have a F!");

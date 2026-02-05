let age = prompt("Gib dein alter ein");

let ageAsNumber = Number(age);
console.log(ageAsNumber);

let result = 0;

if (ageAsNumber == 25 || ageAsNumber < 25) {
  console.log("Your are young");
} else if (ageAsNumber == 45 || (ageAsNumber > 26 && ageAsNumber < 44)) {
  console.log("Your are mid");
} else if (ageAsNumber > 46) {
  console.log("You are old");
} else {
  console.log("Erorr");
}

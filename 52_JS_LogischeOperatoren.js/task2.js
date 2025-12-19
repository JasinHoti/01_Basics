let input1 = Number(prompt("Gib deine Geschwindigkeit ein"));

let input2 = Number(prompt("Gib die Tafelnummer ein"));

console.log(input1 && input2);

if (input1 > 80 || input2 > 7) {
  console.log("slow down!");
} else console.log("You are good to go");

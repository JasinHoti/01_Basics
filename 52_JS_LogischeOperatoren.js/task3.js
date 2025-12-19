let input1 = Number(prompt("Gib dein Grade ein"));

let input2 = Number(prompt("Gib deine attendance ein"));

let input3 = Number(prompt("Gib deine Extra Credits ein"));
console.log(input1 && input2 && input3);

if (input1 == 80 || input1 > 80 && input2 == 90 || input2 > 90 && input3 == 5 || input3 > 5) {
  console.log("Eligible for advanced exam.");
} else console.log("Not eligible for advanced exam.");
let input1 = Number(prompt("Gib dein alter ein"));

let input2 = Number(prompt("Gib dein Geld ein"));

console.log(input1 && input2);

if (input1 == 18 || input1 > 18 && input2 == 12 || input2 > 12) {
  console.log("Ticket purchased" );
} else if (input1 == 18 || input1 > 18 && input2 < 12){
    console.log("Not enaught money")
}else console.log ("You are to young")

let a = Number(prompt("Gib die erste Zahl ein"))
let b = Number(prompt("Gib die zweite zahl ein"))

let start = Math.min(a, b);
let end = Math.max(a, b);

let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
} 

console.log("Summe:", sum);

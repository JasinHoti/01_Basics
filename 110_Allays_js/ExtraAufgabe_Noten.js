let sum = 0

let input1 = Number(prompt("Gib deine Anzahl an Noten ein"));
let arr = [ ]
arr.push(input1)
for(let i = 0; i < arr.length; i++){
sum = sum + arr[i]
} console.log(sum / arr.length)

let temperatur = prompt("Gib die heutige Temperatur ein");

let selection = parseInt(temperatur);

let result = 0;

if (selection <= -3) {
  console.log("Stay at Home, its to colddd");
} else if (selection < 18 && selection >= -2) {
  console.log("You have to ziehen you warm an, sonst your freezing");
} else if (selection < 28 && selection > 19) {
  console.log("Go out of your hous, touch grasss");
} else if (selection < 40 && selection >= 29) {
  console.log("Go swim its very hot");
} else if (selection >= 41) {
  console.log("Put some ice on your head");
}

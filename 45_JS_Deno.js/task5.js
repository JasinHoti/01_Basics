let temperatur = prompt("Gib die heutige Temperatur ein");

let temperaturAsNumber = parseInt(temperatur);

let result = 0;

if (temperaturAsNumber <= -3) {
  console.log("Stay at Home, its to colddd");
} else if (temperaturAsNumber < 18 && temperaturAsNumber >= -2) {
  console.log("You have to ziehen you warm an, sonst your freezing");
} else if (temperaturAsNumber < 28 && temperaturAsNumber > 19) {
  console.log("Go out of your hous, touch grasss");
}else if (temperaturAsNumber < 40 && temperaturAsNumber >= 29){
    console.log("Go swim its very hot")
}else if (temperaturAsNumber >= 41){
    console.log("Put some ice on your head")
}
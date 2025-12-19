let input1 = Number(
  prompt("Gib die Temperatur in deiner Stadt ein")
);

let input2 = Number(
  prompt("Gib die Luftfeuchtigkeit in deiner Stadt ein")
);

console.log(input1 && input2)

if(input1 < 25 && input1 >20 && input2 < 60){
    console.log("Idealer Tag zum rausgehen")
}else console.log("maybe you should sty at home today")
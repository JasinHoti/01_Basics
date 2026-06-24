function generate () {
    let number1 = document.getElementById("input1").value;
    let number2 = document.getElementById("input2").value;

    let amountOfRandomNumbers = parseInt(number2) - parseInt(number1) +1;
    .log(number1 + " : " + number2);

    let randomNumber = Math.floor(Math.random() * amountOfRandomNumbers) + parseInt(number1)
    document.getElementById("random").innerHTML = random;
}
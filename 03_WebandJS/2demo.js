let button = document.getElementById("button").addEventListener("click", function () {
  let vaule1 = document.getElementById("vaule1").value;
  const vaule2 = document.getElementById("vaule2").value;

  if (isNaN(vaule1) || isNaN(vaule2)) {
    alert("Invalid value");
  } else {
    const sum = parseFloat(vaule1) + parseFloat(vaule2);
    document.getElementById("result").innerText = "Sum: " + sum;
  }
});

document.getElementById("button2").addEventListener("click", function () {
  const vaule1 = document.getElementById("vaule1").value;
  const vaule2 = document.getElementById("vaule2").value;

  if (isNaN(vaule1) || isNaN(vaule2)) {
    alert("Invalid value");
  } else {
    const sum = parseFloat(vaule1) - parseFloat(vaule2);
    document.getElementById("result2").innerText = "Minus: " + sum;
  }
});

document.getElementById("button3").addEventListener("click", function () {
  const vaule1 = document.getElementById("vaule1").value;
  const vaule2 = document.getElementById("vaule2").value;

  if (isNaN(vaule1) || isNaN(vaule2)) {
    alert("Invalid value");
  } else {
    const sum = parseFloat(vaule1) * parseFloat(vaule2);
    document.getElementById("result3").innerText = "Multiplicate: " + sum;
  }
});

document.getElementById("button4").addEventListener("click", function () {
  const vaule1 = document.getElementById("vaule1").value;
  const vaule2 = document.getElementById("vaule2").value;

  if (isNaN(vaule1) || isNaN(vaule2)) {
    alert("Invalid value");
  } else {
    const sum = parseFloat(vaule1) / parseFloat(vaule2);
    document.getElementById("result4").innerText = "Divid: " + sum;
  }
});  
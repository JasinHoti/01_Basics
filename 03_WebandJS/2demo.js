document.getElementById("button").addEventListener("click", function () {
  const vaule1 = document.getElementById("vaule1").value;
  const vaule2 = document.getElementById("vaule2").value;

  if (isNaN(vaule1) || isNaN(vaule2)) {
    alert("Invalid value");
  } else {
    const sum = parseFloat(vaule1) + parseFloat(vaule2);
    document.getElementById("result").innerText = "Sum: " + sum;
  }
});

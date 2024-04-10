// FAHRENHEIT TO CELSIUS CONVERTER

// Variables
let input1 = document.getElementById("inputf");
let input2 = document.getElementById("inputc");
let button1 = document.getElementById("convertbtnf");
let button2 = document.getElementById("convertbtnc");

// Event Listener
button1.addEventListener("click", calculateFtoC);
button2.addEventListener("click", calculateCtoF);

// Event Function
function calculateFtoC() {
  // Input
  let userIn = +input1.value;

  // Process
  let output = ((userIn - 32) * 5) / 9;

  // Output
  document.getElementById("output1").innerHTML = output;
}

function calculateCtoF() {
  // Input
  let userIn = +input2.value;

  // Process
  let output = userIn * (9 / 5) + 32;

  // Output
  document.getElementById("output2").innerHTML = output;
}

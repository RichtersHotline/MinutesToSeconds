let Answer = document.getElementById("Output")
let Display = document.getElementById("Seconds")
function Converter() {
let UserInput = document.getElementById("UserInput").value
Display.style.display = "block"
Answer.innerHTML = UserInput * 60;



}
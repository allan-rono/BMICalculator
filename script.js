const kilograms = document.getElementById("kilograms");
const centimeters = document.getElementById("centimeters");
const getBmi = document.getElementById("submit");
const answer = document.getElementById("answer");

function calculateBMI(kg, cm) {
    kg = Number(kilograms.value)
    cm = Number(centimeters.value)
    var m = cm / 100;
    answer.innerHTML = kg / ((m) ** 2);
}

getBmi.addEventListener("click", calculateBMI);

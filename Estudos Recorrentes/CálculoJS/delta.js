function mostrarDelta() {
    var valorA = document.getElementById("valorA");
    var valorB = document.getElementById("valorB");
    var valorC = document.getElementById("valorC");

    var resultadoDelta = document.getElementById("resultadoDelta");

    var A = valorA.value;
    var B = valorB.value;
    var C = valorC.value;

    var delta = (B ** 2) - 4 * A * C

    resultadoDelta.textContent = "O valor de Delta é: " + delta
}
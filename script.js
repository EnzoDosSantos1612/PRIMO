function verificar() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (numero > 0) {
        resultado.textContent = "positivo";
        resultado.style.color = "#22c55e";
    } else if (numero < 0) {
        resultado.textContent = "negativo";
        resultado.style.color = "#ef4444";
    } else {
        resultado.textContent = "nulo";
        resultado.style.color = "#eab308";
    }
}

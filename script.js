function verificarPrimo() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(numero)) {
    resultado.textContent = 'Digite um número válido!';
    resultado.style.color = '#f87171';
    return;
  }

  if (numero < 2) {
    resultado.textContent = 'N';
    resultado.style.color = '#f87171';
    return;
  }

  let ehPrimo = true;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  resultado.textContent = ehPrimo ? 'S' : 'N';
  resultado.style.color = ehPrimo ? '#86efac' : '#f87171';
}

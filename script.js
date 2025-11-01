function verificarPrimo() {
const n = parseInt(document.getElementById('numero').value);
const res = document.getElementById('resultado');


if (isNaN(n) || n < 1) {
res.textContent = 'Digite um número válido!';
return;
}


if (n === 1) {
res.textContent = 'N';
return;
}


let primo = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
if (n % i === 0) {
primo = false;
break;
}
}


res.textContent = primo ? 'S' : 'N';
}

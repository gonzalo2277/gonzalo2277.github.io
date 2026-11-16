// Función que verifica si un número es primo
function esPrimo(num) {
  // Los números menores que 2 no son primos
  if (num < 2) {
    return false;
  }

  // Si algún número entre 2 y num - 1 lo divide exacto, no es primo
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // Si ninguno lo dividió, es primo
  return true;
}

const input = document.getElementById("limite");
const boton = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const limite = Number(input.value);

  let primos = "";

  // Revisamos cada número del 1 al límite
  for (let i = 1; i <= limite; i++) {
    if (esPrimo(i)) {
      primos = primos + i + " ";
    }
  }

  resultado.textContent = "Números primos hasta " + limite + ": " + primos;
  console.log(primos);
});
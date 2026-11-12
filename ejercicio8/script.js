// Función que devuelve un entero aleatorio entre min y max
function azar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Obtenemos los elementos de la página
const inputMin = document.getElementById("minimo");
const inputMax = document.getElementById("maximo");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  if (inputMin.value === "" || inputMax.value === "") {
    resultado.textContent = "Por favor, ingresa ambos números";
    return;
  }

  const min = Number(inputMin.value);
  const max = Number(inputMax.value);

  if (min > max) {
    resultado.textContent = "El mínimo no puede ser mayor que el máximo";
    return;
  }

  const numero = azar(min, max);
  const mensaje = "azar(" + min + ", " + max + ") → " + numero;

  resultado.textContent = mensaje;
  console.log(mensaje);
});
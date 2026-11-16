// Función que recibe un array y devuelve solo los números pares
function filtrarPares(array) {
  // filter() se queda con los elementos que cumplen la condición
  return array.filter(function (numero) {
    return numero % 2 === 0;
  });
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const boton = document.getElementById("filtrar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  // Creamos el array con los cuatro números
  const array = [
    Number(num1.value),
    Number(num2.value),
    Number(num3.value),
    Number(num4.value)
  ];

  const pares = filtrarPares(array);

  resultado.textContent = "Los números pares son: " + pares;
  console.log(pares);
});
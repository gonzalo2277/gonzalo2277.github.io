// Función que recibe un array y lo devuelve ordenado de menor a mayor
function ordenar(array) {
  // sort() usa una función de comparación que recibe dos números (a y b)
  return array.sort(function (a, b) {
    return a - b;
  });
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const boton = document.getElementById("ordenar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  // Creamos el array con los cuatro números
  const array = [
    Number(num1.value),
    Number(num2.value),
    Number(num3.value),
    Number(num4.value)
  ];

  const ordenado = ordenar(array);

  resultado.textContent = "Números ordenados: " + ordenado;
  console.log(ordenado);
});
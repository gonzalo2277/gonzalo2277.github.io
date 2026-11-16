// Función que recibe un array de números y devuelve su promedio
function promedio(array) {
  // reduce() va acumulando la suma de todos los números
  const suma = array.reduce(function (acumulado, numero) {
    return acumulado + numero;
  }, 0);

  // Dividimos la suma entre la cantidad de números
  return suma / array.length;
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  // Creamos el array con los cuatro números
  const array = [
    Number(num1.value),
    Number(num2.value),
    Number(num3.value),
    Number(num4.value)
  ];

  const resultadoPromedio = promedio(array);

  resultado.textContent = "El promedio es: " + resultadoPromedio;
  console.log(resultadoPromedio);
});
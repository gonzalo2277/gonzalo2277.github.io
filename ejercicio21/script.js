// Función que recibe un array y un valor, y devuelve los números mayores que ese valor
function filtrarMayores(array, valor) {
  // filter() se queda solo con los números que cumplen la condición
  return array.filter(function (numero) {
    return numero > valor;
  });
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const inputValor = document.getElementById("valor");
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

  const valor = Number(inputValor.value);

  const mayores = filtrarMayores(array, valor);

  resultado.textContent = "Los números mayores que " + valor + " son: " + mayores;
  console.log(mayores);
});
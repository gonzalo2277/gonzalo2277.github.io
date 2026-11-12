function numeroMayor(array) {
  return Math.max(...array); // Los ... abren la caja y sacan los numeros de adentro
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const boton = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  // Creamos el array con los tres números
  const array = [Number(num1.value), Number(num2.value), Number(num3.value)];

  const mayor = numeroMayor(array);

  resultado.textContent = "El número más grande es " + mayor;
  console.log(mayor);
});
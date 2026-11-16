// Función que convierte grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const input = document.getElementById("celsius");
const boton = document.getElementById("convertir");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const celsius = Number(input.value);

  const fahrenheit = celsiusAFahrenheit(celsius);

  resultado.textContent = celsius + " °C equivalen a " + fahrenheit + " °F";
  console.log(fahrenheit);
});
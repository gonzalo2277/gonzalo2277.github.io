// Función que recibe una cadena y muestra el texto en mayúsculas y en minúsculas
function convertirCadena(cadena) {
  const mayusculas = cadena.toUpperCase();
  const minusculas = cadena.toLowerCase();

  return [mayusculas, minusculas];
}

const input = document.getElementById("texto");
const boton = document.getElementById("convertir");
const parrafoMayusculas = document.getElementById("mayusculas");
const parrafoMinusculas = document.getElementById("minusculas");

boton.addEventListener("click", function () {
  const resultado = convertirCadena(input.value);

  parrafoMayusculas.textContent = "En mayúsculas: " + resultado[0];
  parrafoMinusculas.textContent = "En minúsculas: " + resultado[1];

  console.log(resultado[0]);
  console.log(resultado[1]);
});
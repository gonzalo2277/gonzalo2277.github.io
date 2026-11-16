// Función que verifica si una palabra es un palíndromo
function esPalindromo(palabra) {
  // Pasamos a minúscula para que "Ana" y "ana" se traten igual
  palabra = palabra.toLowerCase();

  // Construimos la palabra al revés, igual que en el ejercicio de invertir
  let invertida = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }

  // Si la palabra y su versión invertida son iguales, es palíndromo
  return palabra === invertida;
}

const input = document.getElementById("palabra");
const boton = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const palabra = input.value;

  if (esPalindromo(palabra)) {
    resultado.textContent = "palabra" + "es un palíndromo";
  } else {
    resultado.textContent = "palabra " + "no es un palíndromo";
  }

  console.log(esPalindromo(palabra));
});
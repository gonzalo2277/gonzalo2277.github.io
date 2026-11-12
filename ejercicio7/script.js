// Función que recibe una palabra y cuenta sus vocales
function contarVocales(palabra) {
  const vocales = "aeiou";
  let contador = 0;

  // Recorremos la palabra letra por letra
  for (let i = 0; i < palabra.length; i++) {
    // Pasamos la letra a minúscula asi el programa sirve para las mayusculas tambien y vemos si está en la lista de vocales 
    if (vocales.includes(palabra[i].toLowerCase())) {
      contador++;
    }
  }

  return contador;
}

// Obtenemos los elementos de la página
const input = document.getElementById("palabra");
const boton = document.getElementById("contar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const palabra = input.value.trim();

  if (palabra === "") {
    resultado.textContent = "Por favor, escribe una palabra";
    return;
  }

  const total = contarVocales(palabra);
  const mensaje = "La palabra " + palabra + " tiene " + total + " vocales";

  resultado.textContent = mensaje;
  console.log(mensaje);
});
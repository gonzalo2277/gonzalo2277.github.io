// Función que recibe una frase y devuelve cuántas palabras tiene
function contarPalabras(frase) {
  // split(" ") corta la frase en cada espacio y crea un array de palabras
  const palabras = frase.split(" ");

  // length nos dice cuántos elementos tiene el array
  return palabras.length;
}

const input = document.getElementById("frase");
const boton = document.getElementById("contar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const frase = input.value;

  const total = contarPalabras(frase);

  resultado.textContent = "La frase tiene " + total + " palabras";
  console.log(total);
});
// Función que recibe una frase y devuelve la palabra más larga
function palabraMasLarga(frase) {
  // split(" ") corta la frase en cada espacio y crea un array de palabras
  const palabras = frase.split(" ");

  // Empezamos suponiendo que la primera palabra es la más larga
  let masLarga = palabras[0];

  // Recorremos el array con un bucle for
  for (let i = 1; i < palabras.length; i++) {
    // Si la palabra actual tiene más letras, la reemplaza
    if (palabras[i].length > masLarga.length) {
      masLarga = palabras[i];
    }
  }

  return masLarga;
}

const input = document.getElementById("frase");
const boton = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const frase = input.value;

  const masLarga = palabraMasLarga(frase);

  resultado.textContent = "La palabra más larga es: " + masLarga;
  console.log(masLarga);
});
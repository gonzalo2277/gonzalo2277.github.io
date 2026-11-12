// Función que recibe una cadena y devuelve la cadena invertida
function invertir(cadena) {
  let resultado = "";

  // Recorremos la cadena de atrás hacia adelante
  for (let i = cadena.length - 1; i >= 0; i--) {
    resultado += cadena[i];
  }

  return resultado;
}

// Obtenemos los elementos de la página
const input = document.getElementById("texto");
const boton = document.getElementById("invertir");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const texto = input.value;

  if (texto === "") {
    resultado.textContent = "Por favor, escribe un texto";
    return;
  }

  const invertida = invertir(texto);

  resultado.textContent = invertida;
  console.log(invertida);
});
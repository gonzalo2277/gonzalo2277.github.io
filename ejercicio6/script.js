const input = document.getElementById("numero");
const boton = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

// Cuando se hace clic en el botón, verificamos el número
boton.addEventListener("click", function () {
  if (input.value === "") {
    resultado.textContent = "Por favor, ingresa un número";
    return;
  }

  // Leemos el valor del input y lo convertimos a número
  let numero = Number(input.value);

  // Si el resto de dividir entre 2 es 0, es par
  let mensaje;
  if (numero % 2 === 0) {
    mensaje = "El número " + numero + " es par";
  } else {
    mensaje = "El número " + numero + " es impar";
  }

  // Mostramos el resultado en la página y en la consola
  resultado.textContent = mensaje;
  console.log(mensaje);
});
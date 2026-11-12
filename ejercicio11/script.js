// Función que devuelve un entero aleatorio entre min y max (ambos incluidos)
function azar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const boton = document.getElementById("generar");
const numeros = document.getElementById("numeros");      // párrafo de arriba
const resultado = document.getElementById("resultado");  // párrafo de abajo

boton.addEventListener("click", function () {
  const apariciones = [];
  for (let i = 0; i <= 20; i++) {
    apariciones[i] = 0;
  }

  let listaNumeros = "";

  for (let i = 0; i < 100; i++) {
    const numero = azar(1, 20);
    apariciones[numero]++;
    listaNumeros = listaNumeros + numero + " ";
  }

  let cuenta = 0;
  for (let i = 1; i <= 20; i++) {
    if (apariciones[i] > 0) {
      cuenta++;
    }
  }

  const mensajeNumeros = "Números generados: " + listaNumeros;
  const mensaje = "Han aparecido " + cuenta + " números distintos de los 20 posibles";

  //Cada mensaje va en su propio párrafo con textContent
  numeros.textContent = mensajeNumeros;
  resultado.textContent = mensaje;

  console.log(mensajeNumeros);
  console.log(mensaje);
});
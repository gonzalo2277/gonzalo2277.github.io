// Pedimos el número al usuario y lo convertimos a número
let numero = Number(prompt("Ingresa un número:"));

// Si el resto de dividir entre 2 es 0, es par
if (numero % 2 === 0) {
  console.log("El número " + numero + " es par");
} else {
  console.log("El número " + numero + " es impar");
}
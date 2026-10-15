// 1. Declarar un array vacío y rellenarlo con 100 números al azar (del 1 al 1000)
let numeros = [];

for (let i = 0; i < 100; i++) {
    // Math.random() genera un número entre 0 y 1, lo multiplicamos por 1000 y redondeamos con Math.floor
    let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    numeros.push(numeroAleatorio);
}

// 2. Mostrar el contenido completo del array usando console.table
console.info("--- LISTA COMPLETA DE 100 NÚMEROS (console.table) ---");
console.table(numeros);

// 3. Realizar un filtrado de datos (por ejemplo, filtrar números en un rango de 300 a 700)
let rangoMinimo = 300;
let rangoMaximo = 700;

let numerosFiltrados = numeros.filter(num => num >= rangoMinimo && num <= rangoMaximo);

// 4. Mostrar los resultados del filtrado
console.info(`--- NÚMEROS FILTRADOS (Entre ${rangoMinimo} y ${rangoMaximo}) ---`);
console.log(`Total de números que cumplen la condición: ${numerosFiltrados.length}`);
console.table(numerosFiltrados);
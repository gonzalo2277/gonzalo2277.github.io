let numeros = [];

for (let i = 0; i < 100; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    numeros.push(numeroAleatorio);
}

console.info("--- LISTA COMPLETA DE 100 NÚMEROS (console.table) ---");
console.table(numeros);

let rangoMinimo = 300;
let rangoMaximo = 700;

let numerosFiltrados = numeros.filter(num => num >= rangoMinimo && num <= rangoMaximo);

console.info(`--- NÚMEROS FILTRADOS (Entre ${rangoMinimo} y ${rangoMaximo}) ---`);
console.log(`Total de números que cumplen la condición: ${numerosFiltrados.length}`);
console.table(numerosFiltrados);
// 1. Declaración de variables de varios tipos de datos
let nombre = "Carlos";                 // String (Cadena de texto)
let edad = 30;                         // Number (Entero)
let temperatura = 21.5;                // Number (Decimal)
let isActive = true;                   // Boolean (Booleano)
let sinValor = undefined;              // Undefined (No definido)
let datoNulo = null;                   // Null (Ausencia intencional de valor)
let idUnico = Symbol("id");            // Symbol (Identificador único)
let granNumero = 9007199254740991n;    // BigInt (Número entero muy grande)
let usuario = {                        // Object (Objeto)
    pais: "España",
    rol: "Administrador"
};

// 2. Uso de console.info para mostrar información general
console.info("--- INFORMACIÓN GENERAL DE VARIABLES ---");
console.info("Valor:", nombre, "| Tipo:", typeof nombre);
console.info("Valor:", edad, "| Tipo:", typeof edad);
console.info("Valor:", temperatura, "| Tipo:", typeof temperatura);

// 3. Uso de console.log para el flujo estándar
console.log("--- DATOS ESTÁNDAR ---");
console.log("Valor:", isActive, "| Tipo:", typeof isActive);
console.log("Valor:", sinValor, "| Tipo:", typeof sinValor);
console.log("Valor:", datoNulo, "| Tipo:", typeof datoNulo); // Curiosidad de JS: typeof null devuelve "object"

// 4. Uso de console.debug para detalles de depuración
console.debug("--- DATOS DE DEPURACIÓN ---");
console.debug("Valor:", idUnico, "| Tipo:", typeof idUnico);
console.debug("Valor:", granNumero, "| Tipo:", typeof granNumero);

// 5. Uso de console.warn para advertencias o mostrar objetos complejos de forma limpia
console.error("--- ADVERTENCIA / OBJETO ---");
console.error("Valor:", usuario, "| Tipo:", typeof usuario);
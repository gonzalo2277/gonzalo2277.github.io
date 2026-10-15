let nombre = "Carlos";                 
let edad = 30;                         
let temperatura = 21.5;                
let isActive = true;                   
let sinValor = undefined;              
let datoNulo = null;                   
let idUnico = Symbol("id");            
let granNumero = 9007199254740991n;    
let usuario = {                        
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
console.log("Valor:", datoNulo, "| Tipo:", typeof datoNulo); 

// 4. Uso de console.debug para detalles de depuración
console.debug("--- DATOS DE DEPURACIÓN ---");
console.debug("Valor:", idUnico, "| Tipo:", typeof idUnico);
console.debug("Valor:", granNumero, "| Tipo:", typeof granNumero);

// 5. Uso de console.warn para advertencias o mostrar objetos complejos de forma limpia
console.error("--- ADVERTENCIA / OBJETO ---");
console.error("Valor:", usuario, "| Tipo:", typeof usuario);
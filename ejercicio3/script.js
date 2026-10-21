let persona = {
    nombre: "Ana Gómez",
    edad: 28,
    altura: 1.68,
    esEstudiante: false,
    telefono: null,
    correo: undefined,
    idSeguridad: Symbol("id_seg"),
    deudaSocial: 5000000000000n,

    hobbies: ["Fotografía", "Senderismo", "Lectura", "Ciclismo"],

    direccion: {
        calle: "Gran Vía 45",
        ciudad: "Madrid",
        codigoPostal: "28013",
        pais: "España"
    }
};

console.info("--- MOSTRANDO OBJETO CON console.log ---");
console.log("Objeto persona:", persona);

console.info("--- MOSTRANDO OBJETO PRINCIPAL CON console.table ---");
console.table(persona);

console.info("--- MOSTRANDO ARRAY DE HOBBIES CON console.table ---");
console.table(persona.hobbies);

console.info("--- MOSTRANDO OBJETO DIRECCIÓN CON console.table ---");
console.table(persona.direccion);
// Datos de pruebas iniciales 
let entrada_nombre = "  cARLOS aLBERTO  ";
let entrada_correo = "carlos.alberto@DOMINIO.COM";
let entrada_edad = "24";
let entrada_codigo_promo = "DESC-2026-X";

//limpieza de los datos
 let limpieza = entrada_nombre.trim().toLowerCase().split(" ");
 console.log(limpieza);

// limpieza[0] = limpieza[0].slice(0, 1).toUpperCase() + limpieza[0].slice(1);
// limpieza[1] = limpieza[1].slice(0, 1).toUpperCase() + limpieza[1].slice(1);

// console.log(limpieza);

// //validacion de correo
// let validor_correo = entrada_correo.toLowerCase();
// let correo_validado = validor_correo.includes("@") && validor_correo.includes(".com");

// //validacion de codigo
// let validar_codigo = entrada_codigo_promo.startsWith("DESC");
// let validar_año =  entrada_codigo_promo.slice(5, 9);





/* //Solicita datos al usuario
var d = prompt("Ingrese número de dias: ");
const anio = 365;
const sema = 7;
const dia = 1;
//dias = parseInt(dias);
var a = Math.floor((parseInt(d) / anio));
var ad = Math.floor((parseInt(d) % anio));
var s = Math.floor(ad / sema);
var sd = Math.floor(ad % sema);


console.log("años: " + a);
console.log("dias sobrantes: " + ad);
console.log("semanas: " + s);
console.log("dias sobrantes: " + sd);

console.log("Año(s): " + a + ", " + s + " semanas y " + sd + " días.");

document.write("Año(s): " + a + ", " + s + " semanas y " + sd + " días.")
//document.write(calc); */


let cantidadDeDias;

do {
    cantidadDeDias = +prompt("Ingrese la cantidad de dias", "373");
} while( cantidadDeDias < 0);

var cantidadDeAnios = Math.floor(cantidadDeDias / 365);
console.log("Cantidad de años: " + cantidadDeAnios);

var cantidadDeSemanas = Math.floor((cantidadDeDias % 365) / 7);
console.log("Cantidad de semanas: " + cantidadDeSemanas);

var cantidadDiasRestantes = Math.floor((cantidadDeDias % 365) % 7);
console.log("Cantidad de días restantes: " + cantidadDiasRestantes);
/* SOLICITAR INFORMACIÓN AL USUARIO */
//Declara un arreglo vacío
var arr = [];

/* //iteraciòn de la cantidad de numeros que se solicitan
for (var i = 0; i < 5; i++){
    //cada numero ingresado, se agrega al final del arreglo
    arr.push(prompt("Ingrese un valor entero: "));
}
//imprime el conjunto de valores, separados por coma
document.write("Los valores ingresados son: " + arr.join(", "));

//suma de los valores del array
let total=0;

for(let i = 0; i <= arr.length; i++){
    total+=arr[i];
    arr.map(parseInt);
} 
console.log(parseInt(total)); */

var num1 = prompt("Ingrese valor 1: ");
var num2 = prompt("Ingrese valor 2: ");
var num3 = prompt("Ingrese valor 3: ");
var num4 = prompt("Ingrese valor 4: ");
var num5 = prompt("Ingrese valor 5: ");

var suma = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);

var promedio = suma / 5;

document.write("La suma de los valores ingresados es: " + suma + " y su promedio es: " + promedio + ".");
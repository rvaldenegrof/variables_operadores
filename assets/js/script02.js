/* SOLICITA AL USUARIO 2 NUMEROS Y LOS ALMACENA EN SUS REPECTIVAS VARIABLES */
var num1 = prompt("Ingrese el primer número");  //Lee valor 1
var num2 = prompt("Ingrese el segundo número"); //Lee valor 2

/* CREA LAS OPERACIONES UTILIZANDO LAS 2 VARIABLES */
var suma = parseInt(num1) + parseInt(num2); // GUARDA EL RESULTADO DE LA OPERACIÓN EN LA VARIABLE SUMA
var resta = parseInt(num1) - parseInt(num2); // GUARDA EL RESULTADO DE LA OPERACIÓN EN LA VARIABLE RESTA
var multiplicacion = parseInt(num1) * parseInt(num2); // GUARDA EL RESULTADO DE LA OPERACIÓN EN LA VARIABLE MULTIPLICACIÓN
var division = parseInt(num1) / parseInt(num2); // GUARDA EL RESULTADO DE LA OPERACIÓN EN LA VARIABLE DIVISIÓN
var modulo = parseInt(num1) % parseInt(num2);

/* IMPRIME EL VALOR DE LAS OPERACIONES */
document.write("El resultado de la suma entre " +num1+ " + " +num2+" es: " +suma+"."); // IMPRIME EL RESULTADO DE LA SUMA
document.write("</br>");
document.write("El resultado de la resta entre " +num1+ " - " +num2+" es: " +resta+"."); // IMPRIME EL RESULTADO DE LA RESTA
document.write("</br>");
document.write("El resultado de la multiplicación entre " +num1+ " * " +num2+" es: " +multiplicacion+"."); // IMPRIME EL RESULTADO DE LA MULTIPLICACIÓN
document.write("</br>"); 
document.write("El resultado de la división entre " +num1+ " / " +num2+" es: " +division+"."); // IMPRIME EL RESULTADO DE LA DIVISIÓN
document.write("</br>"); 
document.write("El módulo entre " +num1+ " % " +num2+" es: " +modulo+"."); // IMPRIME EL MÓDULO
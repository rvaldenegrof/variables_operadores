/* EJERCICIO 03 */
/* SOLICITA AL USUARIO EL DATO A TRANSFORMAR */
var grados = prompt("Ingrese la temperatura en Grados Celcius: ");  //Lee valor 1
const kelvin = 273.15;
const farenheit = 32;

//0​ °C + ​273.15​ = ​273.15​ K
var trans_kelvin = parseInt(grados) + kelvin; // Realiza transformación a kelvin

//(​0​ °C × ​9​/​5​) + ​32​ = ​32​ °F
var trans_farenheit = (parseInt(grados)*(9/5) + farenheit);


/* IMPRIME VALORES */
document.write(grados + "º Grados Celcius equivalen a " + trans_kelvin + "º Kelvin y " + trans_farenheit + "º Farenheit.");

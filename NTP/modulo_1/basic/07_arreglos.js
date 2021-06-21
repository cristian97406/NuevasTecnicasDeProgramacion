//CONCAT -----------------------------------------

var numeros = [1,2,3,4,5];
var nuevosNUmeros = numeros.concat([6,7,8,9,0]);

// console.log(numeros);
// console.log(nuevosNUmeros)

//JOIN --------------------------------------------
var nombre = ["c","r","i","s","t","i","a","n"]
//console.log(nombre.join(";"))

//SLICE -------------------------------------------
//console.log(nombre.slice(2))

//INDEX OF ----------------------------------------
//console.log(nombre.indexOf("a"))

//LAST INDEX OF -----------------------------------
//console.log(nombre.lastIndexOf("i"))

//REVERSE ----------------------------------------
//console.log(nombre.reverse())

//SORT --------------------------------------------
var numerosDesordenados = [3,4,7,6,8,2,1,5,0,9]
//console.log(numerosDesordenados.sort())

//SHIFT -------------------------------------------
//console.log(numerosDesordenados.shift());

//POP ---------------------------------------------
//console.log(numerosDesordenados.pop());

//PUSH --------------------------------------------
numerosDesordenados.push(1012)
//console.log(numerosDesordenados);

var pares = [2,4,6,8,10]
//console.log(pares.map((elemento) => elemento + 1))


//Consultar funciones de arreglo
//FOREACH -----------------------------------------
const array1 = [11,12,13,14,15,16];

array1.forEach(item => {
    console.log(item); 
})

//INCLUDES ------------------------------------------
const arreglo2 = [1,2,3];
console.log(arreglo2.includes(2));

//FILTER -------------------------------------------
const esteEsfilter = array1.filter(num => num > 13);
console.log(esteEsfilter);
//REDUCE -------------------------------------------
const suma = array1.reduce((total, value)=> total +value, 0);
console.log(suma)
// every --------------------------------------------
const array5 = [2,3,4,5,6,7]
const prueba = array5.every(num => num > 4);
console.log(prueba)
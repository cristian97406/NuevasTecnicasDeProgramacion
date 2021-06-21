// Funciones Declarativas ---------------

function saludar (){    
    return "hola soy Cristian"
}
// var resultado = saludar()
// console.log(resultado)

function saludar2 (){    
    console.log ("hola soy Andres");
}
// saludar2();
//
//Funciones con parametros --------------
function saludarConParametro(nombre, apellido){
    return `Hola soy ${nombre} ${apellido}`;
}
//console.log(saludarConParametro("Cristian","Cordova"))

//Funciones con parametros por defecto --------------
function saludarConProfesion(nombre="Persona", apellido="Analisis de Sistemas"){
    return `Hola ${nombre} mi profesion es: ${apellido}`;
}
//console.log(saludarConProfesion("Cristian", "Sistemas"))

//FUNCIONES EXPRESIVAS - FUNCIONES ANONIMAS -------------
var saludoConEdad = function (nombre,edad) {
    return `Hola soy ${nombre} y tengo ${edad} año(s)`
}
//console.log(saludoConEdad("Cristian", 23))

//ARROW FUNCTION - FUNCIONES FLECHA -------------------
//
// var saludoConApellido = (nombre, apellido) => {
//     return `Hola soy ${nombre} ${apellido}`
// }
// console.log(saludoConApellido("Cristian","Cordova"))
// //
// var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`
// console.log(saludoConApellido("Cristian","Cordova"));
//
var suma= (num1,num2) => num1+num2
//console.log(suma(2,3));

//FUNCIONES COMO PARAMETROS DE OTRAS FUNCIONES---------------
function saludoConFunciones(nombre,cb){
    return cb(nombre)
};

var miSaludo = saludoConFunciones("Cristian", function(nombre) {
    return `Hola soy ${nombre}`;
});
//console.log(miSaludo)

var miSaludo2 = saludoConFunciones("Cristian", (nombre) => `Hola soy ${nombre}`);
//console.log(miSaludo2)

// setTimeout(() => {
//     console.log("Hola mundo");
// }, 3000);


setInterval(() => {
    console.log("Hola mundo");
}, 2000);



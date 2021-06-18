//Asignacion
//=

// Comparacion
// ==
// ===

// console.log(2 == 2);
// console.log(2 === '2');

//!=
//console.log(2 != 3)

// <
// >
// <=
// >=

//Operadores de aignacion compuesto

// += 
// x=x+y
// - =
// x=x-y
// *=
// /=
// %=
// **=

// var numero = 3
// numero += 2
// console.log(numero)

// var numero = 3
// numero -= 2
// console.log(numero)

// Operadores Aritmeticos
// +
// -
// *
// /
// %
// **

//Destructurar objetos
var persona = {
    nombre: "Cristian",
    apellido: "Cordova",
    edad: 23,
    viajes: {
        destino1: "Colombia",
        destino2: "Mexico"
    }
};

var { nombre:nombre2,apellido,viajes: { destino1 } } = persona;

console.log(persona)
console.log(nombre2)
console.log(apellido)
console.log(persona.nombre)

console.log(destino1)


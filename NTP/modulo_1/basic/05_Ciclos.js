// // while
// while (condition){

// }

// //for
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }
// for in
var persona = {
    nombre: "Cristian",
    apellido: "Cordova",
    viajes: ["a","b"]
}

for (const key in persona) {
   console.log(persona[key])
}
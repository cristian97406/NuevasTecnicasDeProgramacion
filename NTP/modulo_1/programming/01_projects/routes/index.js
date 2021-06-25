//traemos el paquete

const { Router } = require('express');

// Inicializamos Router
const router = Router()

//creacion de los endpoint
router.get("/", (req,res) => {
    res.send("Hola mundo con ExpressJs");
})
.get("/saludo", (req,res) => {
    const { query } = req
    res.json({
        saludo: `Hola soy ${nombre} ${apellido}`
    });
})
.get('/saludo/:nombre', (req,res )=> {
    const { params } = req
    res.json({
        nombre: params.nombre
    })
})




//Exportamos las rutas
module.exports.RouterIndex = router

//module.exports.OtraCosa = route

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }



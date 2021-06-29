//traemos el paquete

const { Router } = require('express');
const { Datavalidator } = require('../middleware/DataValidator');
const { User }= require('../lib/Schema/User')
// Inicializamos Router
const router = Router()

//creacion de los endpoint
router.get("/", (req,res) => {
    res.send(req.pruebaDeMiddleware);
})
.get("/saludo", Datavalidator("query", User), (req, res) => {
    const { query: {nombre, apellido} } = req;
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



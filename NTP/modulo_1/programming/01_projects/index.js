const express = require('express');

//genero una aplicacion
const app = express()

//Routes
const { RouterIndex } = require('./routes/index');

app.use("/", RouterIndex)
app.use("/deber-video", RouterIndex)


//app.use("/user", RouterIndex)
//app.use("/user/data", RouterIndex)

/*
    "/" + "/" = "//" => "/"
    "/" + "/saludo" = "//saludo" => "/saludo"

    "/user" + "/saludo" = "/user/saludo"
    "/user/data" + "/saludo" = "/user/data/saludo"

*/

app.listen(3000, ()=>{
    console.log("Sevidor escuchado en http://localhost:3000");
})



// app.get('/', (req, res)=>{
//     res.send("Hola mundo co ExpressJs")
// })

// app.get("/saludo",(req,res)=>{
//     // req.query
//     // console.log(req.query)
//     // obtenemos la query del objeto request
//     const { query: {nombre, apellido} } = req
//     // const nombre = req.query.nombre
//     // const apellido= req.query.apellido

//     res.json({
//         saludo: `Hola soy ${nombre} ${apellido}`
//     });
// })

// app.get('/saludo/:nombre', (req,res)=>{
    
//     //const { params: { nombre } } = req;
//     const { params } = req
//     //console.log(req.params)
//     res.json({
//         nombre: params.nombre
//         //nombre: nombre
//     })
// })

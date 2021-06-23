const express = require('express');

//genero una aplicacion
const app = express()

app.get('/', (req, res)=>{
    res.send("Hola mundo co ExpressJs")
})

app.listen(3000, ()=>{
    console.log("Sevidor escuchado en http://localhost:3000");
})

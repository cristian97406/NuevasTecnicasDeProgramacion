//traemos el paquete

const { Router } = require('express');
const datos = require('../MOCK_DATA.json');

// Inicializamos Router
const router = Router()

//creacion de los endpoint
router.get("/users", (req, res) => {
    res.send(
        res.json({
            msg: "Primer path/user",
            body: [
                datos.map((person) => {
                    person.first_name = person.first_name.toUpperCase()
                    person.last_name = person.last_name.toUpperCase()
                    return person
                })
            ]
        })
    )
})
    .get("/users-query", (req, res) => {
        const { query: { id } } = req

        var undato = datos.filter(
            unapersona => unapersona.id == id
        );

        if (id == null) {
            res.send(
                res.json({
                    msg: "user con query no mando id Desplegando todo el .json",
                    body: [
                        datos.map((person) => {
                            person.first_name = person.first_name.toUpperCase()
                            person.last_name = person.last_name.toUpperCase()
                            return person
                        })
                    ]
                })
            )
        } else {
            res.json({
                msg: "user con query si mando el id",
                body: [undato]
            });
        }
    })
    .get('/users-params/:apellido', (req, res) => {
        const { params } = req

        var undato = datos.filter(
            unapersona => unapersona.last_name == params.apellido

        );

        var email = undato.map(traer => {
            return traer.email
        })


        var validar = false

        for (let i = 0; i < datos.length; i++) {
            if (params.apellido === datos[i].last_name) {
                validar = true
                break;
            }
        }

        if (validar == true) {
            res.json({
                msg: "params con apellido y me tariga solo email",
                body: [{
                    correo: email
                }]
            })
        } else {
            res.json({
                msg: "el apellido solicitado no existe y el body en null",
                body: []
            })
        }

    })


//Exportamos las rutas
module.exports.RouterIndex = router




const express = require('express')
const  moment = require('moment'); // require
const app = express() //Se crea instancia de express
moment.locale("ES"); 

app.get('/', function (req, res) {
  res.send(`
    <ul>
    <li>Día: ${moment().format('dddd')}</li>
    <li>Número día: </li>
    <li>Mes: </li>
    <li>Año: </li>
    <li>Hora: </li>
    <li>Minutos: </li>
    <li>Segundos: </li>
    </ul>
  
  `)
})

app.all("*", (req, res) => {
  res.status(404).send("No encontrado.")
})

app.listen(3000, () => console.log("Servidor escuchando en http://localhost:3000")) //agregamos una respuesta con un callback
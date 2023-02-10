const express = require('express')
const  moment = require('moment'); // require
const randomWords = require('random-words');
const app = express() //Se crea instancia de express
moment.locale("ES"); 

app.get('/', function (req, res) {
  res.send(`
    <ul>
    <li>Día: ${moment().format('dddd')} </li>
    <li>Número día: ${moment().format('D')} </li>
    <li>Mes: ${moment().format("MMMM")} </li>
    <li>Año: ${moment().format('YYYY')} </li>
    <li>Hora: ${moment().format('h')} </li>
    <li>Minutos: ${moment().format('mm')} </li>
    <li>Segundos: ${moment().format('ss')} </li>
    </ul>
  
  `)
})

app.get('/azar', function(req, res){
  res.send(`<h1>${randomWords({exactly: 1, maxLength: 10})}</h1>`)
})

app.put('/azar', function(req, res){  //Comprobar con postman localhost:3000/azar
  let randomNumber = Math.floor(Math.random() * (50000 - 10) + 10);
  res.send(`<h1>${randomNumber}</h1>`)
})

app.all("*", (req, res) => {
  //res.status(404).send("No encontrado.")
  res.status(404).send(`<h1>Aún no estoy preparado para responder al método ${req.method}</h1>`)
})

app.listen(3000, () => console.log("Servidor escuchando en http://localhost:3000")) //agregamos una respuesta con un callback
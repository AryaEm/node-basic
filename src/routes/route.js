const express = require('express')
const app = express()

app.use(express.json())

const praaktikumController = require(`../controllers/praktikumController`)

app.get("/profil/:name/:age/:kelas", praaktikumController.profil)
app.get("/identitas", praaktikumController.identitas)
app.post("/bujurSangkar", praaktikumController.bujurSangkar)

module.exports = app
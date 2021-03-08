const { v4: uuidV4 } = require('uuid')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/uuid', (req, res) => {
    res.send(uuidV4());
})

app.get('/', (req, res) => {
    res.send("Made by Caique Peixoto for FED22");
})

app.listen(PORT, () => {
    console.log(`UUID generator is listening at port: ${PORT}`)
})
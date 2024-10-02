const { urlencoded } = require('express')
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000, () => {
    console.log('Servidor iniciado com sucesso na porta 3000');
})
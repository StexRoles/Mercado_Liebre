const express = require('express');
const app = express();
const path = require('path');

//Conecta todos los elemntos de la carpeta public para ser usados
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor ejecutandose en http://localhost:' + port);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.post('/login', (req, res) => {
    //Manejo de la información del formulario
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});
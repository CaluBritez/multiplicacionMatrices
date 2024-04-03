const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/multiplicar', (req, res) => {});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
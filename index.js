const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/multiplicar', (req, res) => {
        // Extrae las matrices del cuerpo de la solicitud
        const { matriz1, matriz2 } = req.body;

        // Función para multiplicar matrices
        function multiplicarMatrices(matriz1, matriz2) {
            let result = [];
            for (let i = 0; i < matriz1.length; i++) {
                result[i] = [];
                for (let j = 0; j < matriz2[0].length; j++) {
                    let sum = 0;
                    for (let k = 0; k < matriz1[0].length; k++) {
                        sum += matriz1[i][k] * matriz2[k][j];
                    }
                    result[i][j] = sum;
                }
            }
            return result;
        }
    
        // Realiza la multiplicación de matrices
        const resultadoMultiplicacion = multiplicarMatrices(matriz1, matriz2);
    
        // Envía el resultado de vuelta al cliente
        res.json(resultadoMultiplicacion);
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
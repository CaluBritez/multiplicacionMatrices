function crearMatriz() {
    //TOMAR DATOS FILAS-COLUMNAS
    let filas1 = parseInt(document.getElementById("cantFilas1").value);
    let columnas1 = parseInt(document.getElementById("cantColumnas1").value);

    let filas2 = parseInt(document.getElementById("cantFilas2").value);
    let columnas2 = parseInt(document.getElementById("cantColumnas2").value);

    // Obtener el contenedor en el HTML
    let cajaMatriz1 = document.getElementById("cajaMatriz1")
    cajaMatriz1.innerHTML = '';
    let titulo1 = document.createElement('h3');
    titulo1.innerHTML = 'Matriz 1';
    cajaMatriz1.appendChild(titulo1);

    let cajaMatriz2 = document.getElementById("cajaMatriz2")
    cajaMatriz2.innerHTML = '';
    let titulo2 = document.createElement('h3');
    titulo2.innerHTML = 'Matriz 2';
    cajaMatriz2.appendChild(titulo2);

    let matriz1 = [];
    let matriz2 = [];

    for (let i = 0; i < filas1; i++) {
        let fila1 = [];

        for (let j = 0; j < columnas1; j++) {
            let input1 = document.createElement('input');
            input1.setAttribute('type', 'number');
            input1.setAttribute('id', 'inputNumber');
            cajaMatriz1.appendChild(input1); // Agregar input al contenedor
            fila1.push(input1);
        }

        matriz1.push(fila1);
        cajaMatriz1.appendChild(document.createElement('br'));
    }
    for (let i = 0; i < filas2; i++) {
        let fila2 = [];

        for (let j = 0; j < columnas2; j++) {
            let input2 = document.createElement('input');
            input2.setAttribute('type', 'number');
            input2.setAttribute('id', 'inputNumber');
            cajaMatriz2.appendChild(input2);
            fila2.push(input2);
            
        }
        matriz2.push(fila2);
        cajaMatriz2.appendChild(document.createElement('br'));
    }


    let botonSumar = document.getElementById("botonMultiplicar");
    botonSumar.innerHTML = '';
    botonSumar.innerHTML = '<button type="submit">Multiplicar Matrices</button>';
}

function sePuede() {
    let columnas1 = parseInt(document.getElementById("cantColumnas1").value);
    let filas2 = parseInt(document.getElementById("cantFilas2").value);
    if (columnas1 == filas2){
        crearMatriz()
    }else{
        let cajaMatrices = document.getElementById("cajaMatrices")
        cajaMatrices.innerHTML = '';
        let titulo1 = document.createElement('h3');
        titulo1.innerHTML = 'NO SE PUEDE REALIZAR OPERACION - Las columnas de la primera matriz no coinciden con las filas de la segunda';
        cajaMatrices.appendChild(titulo1);
    }
}
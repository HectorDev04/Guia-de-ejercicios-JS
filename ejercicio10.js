function procesarEdades() {
    let edadesManana = [
        parseInt(document.getElementById('manana1').value),
        parseInt(document.getElementById('manana2').value),
        parseInt(document.getElementById('manana3').value),
        parseInt(document.getElementById('manana4').value),
        parseInt(document.getElementById('manana5').value)
    ];

    let edadesTarde = [
        parseInt(document.getElementById('tarde1').value),
        parseInt(document.getElementById('tarde2').value),
        parseInt(document.getElementById('tarde3').value),
        parseInt(document.getElementById('tarde4').value),
        parseInt(document.getElementById('tarde5').value),
        parseInt(document.getElementById('tarde6').value)
    ];

    let edadesNoche = [
        parseInt(document.getElementById('noche1').value),
        parseInt(document.getElementById('noche2').value),
        parseInt(document.getElementById('noche3').value),
        parseInt(document.getElementById('noche4').value),
        parseInt(document.getElementById('noche5').value),
        parseInt(document.getElementById('noche6').value),
        parseInt(document.getElementById('noche7').value),
        parseInt(document.getElementById('noche8').value),
        parseInt(document.getElementById('noche9').value),
        parseInt(document.getElementById('noche10').value),
        parseInt(document.getElementById('noche11').value)
    ];

    // Calcular promedios
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);

    // Determinar cuál turno tiene el promedio mayor
    let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    let mensaje = '';

    if (mayorPromedio === promedioManana) {
        mensaje = 'El turno Mañana tiene el promedio mayor.';
    } else if (mayorPromedio === promedioTarde) {
        mensaje = 'El turno Tarde tiene el promedio mayor.';
    } else {
        mensaje = 'El turno Noche tiene el promedio mayor.';
    }

    // Mostrar resultados
    document.getElementById('resultado').innerHTML = `
        Promedio Turno Mañana: ${promedioManana.toFixed(2)} <br>
        Promedio Turno Tarde: ${promedioTarde.toFixed(2)} <br>
        Promedio Turno Noche: ${promedioNoche.toFixed(2)} <br><br>
        ${mensaje}
    `;
}

function calcularPromedio(edades) {
    let suma = edades.reduce((acc, edad) => acc + edad, 0);
    return suma / edades.length;
}

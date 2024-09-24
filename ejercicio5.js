function calcularDescuento() {
    // Seleccionar el carro
    const carSelect = document.getElementById('car')
    const selectedCar = carSelect.value;

    let descuento = 0;

    // Condicion
    if (selectedCar === 'FORD FIESTA') {
        descuento = 5;
    } else if (selectedCar === 'FORD FOCUS') {
        descuento = 10;
    } else if (selectedCar === 'FORD ESCAPE') {
        descuento = 20;
    }

    // Obtener resultados
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `Has seleccionado: ${selectedCar}. Se aplicara un descuento de ${descuento}% `;
}
/*
Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%
*/

function descViajes() {

    // Obtener datos del inicio del viaje
    const ciudadOrigenSelect = document.getElementById('ciudadOrigen');
    const ciudadOrigenSelected = ciudadOrigenSelect.value;


    // Obtener datos del lugar de origen
    const lugarDestinoSelect = document.getElementById('ciudadDestino');
    const lugarDestinoSelected = lugarDestinoSelect.value;


    let descuento = 0;

    // Condicion
    if (ciudadOrigenSelected === 'CIUDAD DE PALMA' && lugarDestinoSelected === 'COSTA DEL SOL') {
        descuento = 5;
    } else if (ciudadOrigenSelected === 'CIUDAD DE PALMA' && lugarDestinoSelected === 'PANCHIMALCO') {
        descuento = 10;
    } else if (ciudadOrigenSelected === 'CIUDAD DE PALMA' && lugarDestinoSelected === 'PUERTO EL TRIUNFO') {
        descuento = 15;
    }

    // Resultado
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `Has seleccionado como destino ${lugarDestinoSelected}. Se aplicara un descuento del ${descuento}% `;
}


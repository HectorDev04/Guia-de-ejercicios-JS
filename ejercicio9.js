// Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
// Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
// • Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
// • Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
// • Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
// • Si no está entre ningún caso anterior la frase “Temperatura desconocida”

let tempCelsius = prompt('Ingresa una temperatura en grados Celsius');
let tempFarenheit = parseInt(tempCelsius * (9 / 5) + 32);

if (tempFarenheit >= 14 && tempFarenheit <= 32) {
    console.log(`${tempFarenheit}°F Temperatura baja`);
} else if (tempFarenheit > 32 && tempFarenheit <= 68) {
    console.log(`${tempFarenheit}°F Temperatura adecuada`);
} else if (tempFarenheit > 68 && tempFarenheit <= 96) {
    console.log(`${tempFarenheit}°F Temperatura alta`);
} else {
    console.log(`${tempFarenheit} Temperatura desconocida`);
};

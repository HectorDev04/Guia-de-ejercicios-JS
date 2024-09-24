/*
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares
*/

let negativos = 0;
let positivos = 0;
let multiplosDquince = 0;
let sumPares = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt('Ingresa un número entero'));

    // Condicion para nums positivos y negativos
    if (num < 0) {
        negativos++
        console.log(`${negativos} negativo`);
    } else if (num > 0) {
        positivos++
        console.log(`${positivos} positivo`);
    }

    // Condicion para multiplos de 15
    if (num % 15 === 0) {
        multiplosDquince++
        console.log(`${multiplosDquince} Multiplo de 15`);
    }

    // Condicion para suma de pares
    if (num % 2 === 0) {
        sumPares += num;
        console.log(`${sumPares} Suma de pares`);
    }
}
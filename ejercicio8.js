// Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
// por el usuario
let numInputUser = parseInt(prompt('Ingresa un número: '));
for (let i = 1; i <= 10; i++) {
    let result = numInputUser * i;
    console.log(`${numInputUser} x ${i} = ${result}`);
};

// Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
// Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
// aumento. Deberá demostrar los datos del empleado y el aumento salarial

// CATEGORIA AUMENTO
// A 15%
// B 30%
// C 10%
// D 20%


// Variables 
let nombre = 'Hector';
let salario = 1600;
let categoria = 'B';
let aumentoSalario;
let newSalario;

// Condiciones
switch (categoria) {
    case 'A':
        aumentoSalario = salario * 0.15;
        break;
    case 'B':
        aumentoSalario = salario * 0.30;
        break;
    case 'C':
        aumentoSalario = salario * 0.10;
        break;
    case 'D':
        aumentoSalario = salario * 0.20;
        break;
    default:
        aumentoSalario = 0;
        console.log(`No recibe aumento`);
        break;
}

// Solo calculamos si hay aumento
if (aumentoSalario > 0) {
    newSalario = salario + aumentoSalario;
    console.log(`El empleado ${nombre} de categoría ${categoria} recibió un aumento de sueldo. El salario final es ${newSalario}`);
}
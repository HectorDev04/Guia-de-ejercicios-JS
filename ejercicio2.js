/*
 Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente Examen =20% tareas = 40% asistencia = 10% investigación = 30%
al final debera mostrar los datos del alumno: nombre, edad, carnet y nota final
*/

// Datos del alumno
const name = 'Hector';
const age = 20;
const carnet = 'u20231588';

// Notas del alumno 
let examen = 10;
let asistencia = 8;
let tareas = 9;
let investigación = 10;

// ponderacion de las notas 
let porcientoExamen = 0.20;
let porcientoTareas = 0.40;
let porcientoAsistencia = 0.10;
let porcientoInvestigacion = 0.30;

// Condicion 
function notaFinal() {
    let notaFinal = parseInt((examen * porcientoExamen) + (asistencia * porcientoAsistencia) + (tareas * porcientoTareas) + (investigación * porcientoInvestigacion));
    console.log(`El alumno ${name} de ${age} años de edad y con número de carnet ${carnet} obtuvo una calificacion final de ${notaFinal}`);
}

notaFinal();
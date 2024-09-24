/* Crear una función que en base a la edad que ingreso el usuario devolver un
 mensaje si la persona es mayor de edad o no.Utilizar para la condición el operador ternario */

let edadPersona = 20;
function mayorDeEdad() {
    edadPersona >= 18 ? console.log(`Es mayor de edad ${edadPersona}`) :
        console.log(`Es menor de edad ${edadPersona}`);
}
mayorDeEdad();


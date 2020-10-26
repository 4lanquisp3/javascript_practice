/**
 * Arrow Functions
 */

const MAYORIA_DE_EDAD = 18

/**
 * Asignar funciones a variables
 */

/*const esMayorDeEdad = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD 
}*/

/**
 * Con arrow functions
 */

//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

/**
 * Otra forma
 */
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

var alan = {
  nombre: 'Alan Quispe',
  edad: 27
}

var juan = {
  nombre: 'Juan Perez',
  edad: 14
}

/**
 * Con el operador ternario
 */

const permitirAcceso = ({ edad }) => 
              !esMayorDeEdad({ edad }) ? // No funciona con esMayorDeEdad(edad)
              console.log('Acceso denegado'):
              console.log('Adelante')
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

console.log(`Primera persona: ${personas[0].nombre} ${personas[0]['apellido']}`)

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`)

}

/**
 * Filtrar array
 * Necesitamos 2 cosas:
 * Un array y una condicion
 */

const esAlta = persona => persona.altura > 1.8

/**
 * Filter va iterar por nosotros
 * y nos va pasar a cada elemento 
 * en la funcion esAlta
 */
var personasAltas = personas.filter(esAlta)

/**
 * Otra forma menos prolija,  por que
 * es menos facil de leer
 */
var personasAltas2 = personas.filter(function () {
  return personas.altura > 1.8
})

console.log(personasAltas)


/**
 * Reto, escribir el filtrado de
 * personas bajas, un poco mas prolijo
 */
const esBaja = ({ altura }) => altura < 1.7
var personasBajas = personas.filter(esBaja)
console.log(personasBajas)
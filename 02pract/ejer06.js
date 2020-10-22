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

/**
 * Map nos devuelve un nuevo array con 
 * modificaciones en atributos de los elementos
 */

// persona.altura *= 100 sobreescribe el array original
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
    }) 
/**
 * Como lo que vamos a retornar esta entre llaves
 * debemos encerrar entre parentesis para que la arrow
 * function funcione, si no creera que estamos escribiendo
 * el cuerpo de la funcion.
 */ 

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

//permite hacer un request
// cross domain = url externa, otro dominio

/**
 * Los argumentos de la funcion anonima los podemos
 * obtener en la documentacion de jquery o imprimiendo
 * los argumentos: console.log(arguments)
 * arguments.- es una variable que tienen todas las funciones
 * que nos va dar un array con los parametros que
 * recibe la funcion.
 */


/**
 * Callback, funcion a ejecutar en un futuro, no 
 * sabemos cuando se va ejecutar, pero $.get() va ser
 * el encargado de llamarlo, en un futuro cuando termine
 * el request con los datos que nos mande el request de 
 * respuesta.
 * la funcion callback solo se va ejecutar si el request es
 * exitoso.
 */

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function(persona){
  // console.log(arguments)
  console.log(`Hola yo soy, ${persona.name}`)
}

function obtenerPersonaje(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get(url, opts, onPeopleResponse)
}


/**
 * Los requests se hacen en paralelo y no sabemos 
 * en que orden van a llegar los requests
 * */
/**
 * Podemos contralar el orden pero perdemos
 * el paralelismo
 */
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
var nombre = 'alan quispe'

function obtenerPersonaje(id){
  return new Promise(function(resolve, reject) { // Como arrow function o funcion Anonima
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
      .get(url,opts,function(data){
        resolve(data) // no se llama hasta q get sea exitoso
      })
      .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]

/* var promesas = ids.map(function(id){
  return obtenerPersonaje(id)
}) */

var promesas = ids.map(id => obtenerPersonaje(id))

/**
 * Promise.all, metodo que tiene la clase de promesas
 * que recibe como argumento un array de promesas.
 */
Promise
  .all(promesas)
  .then(personajes => console.log(personajes)) // personajes -> Array con los valores q 
                                               // esperamos de cada una de las promesas
  .catch(onError) // Se ejecuta si cualquiera de las promesas fallan

/* obtenerPersonaje(1)
  .then(personaje => { // "personaje" es data que nos llega de resolve(data)
    console.log(`El personaje 1 es ${personaje.name}`)
    return obtenerPersonaje(2)
  })
  .then(personaje => {
    console.log(`El personaje 2 es ${personaje.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje => {
    console.log(`El personaje 3 es ${personaje.name}`)
    return obtenerPersonaje(4)
  })
  .then(personaje => {
    console.log(`El personaje 4 es ${personaje.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje => {
    console.log(`El personaje 5 es ${personaje.name}`)
    return obtenerPersonaje(6)
  })
  .then(personaje => {
    console.log(`El personaje 6 es ${personaje.name}`)
    return obtenerPersonaje(7)
  })
  .then(personaje => {
    console.log(`El personaje 7 es ${personaje.name}`)
  })
  // Algo bueno: Si en cualquiera de las promesas sucede algun error
  // el catch es el mismo para todos
  .catch(onError) // onError recibe id, el id de reject(id)
 */
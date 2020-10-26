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

obtenerPersonaje(1)
  .then(function(personaje){ // "personaje" es data que nos llega de resolve(data)
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError) // onError recibe id, el id de reject(id)

obtenerPersonaje(2)
  .then(function(personaje){
    console.log(`El personaje 2 es ${personaje.name}`)
  })
  .catch(onError)


obtenerPersonaje(3)
  .then(function(personaje){
    console.log(`El personaje 3 es ${personaje.name}`)
  })
  .catch(onError)


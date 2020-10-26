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

/**
 * Para poder utilizar await la funcion tenemos que 
 * marcarla como Asincrona, con la palabra async antes de function
 */
async function obtenerPersonajes(){
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  
  /**
   * Cuando todas las promesas se resuelvan, ese resultado
   * guardamelo en "personajes", la ejecución de esta función
   * se va a detener aka, hasta q todas las promesas sean resueltas
   * y recien ahí ese valor se va guardar en la variable personajes 
   * para que funcione debemos encerrarlo entre try-catch.
   */
  try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  }catch(id){
    onError(id)
  }  
}

obtenerPersonajes()

/**
 * Nota.- mientras la función Asincrona espera en la instrucción await, JS
 * estará ejecutando normalmente otras instrucciones fuera de la funcion asincrona.
 */
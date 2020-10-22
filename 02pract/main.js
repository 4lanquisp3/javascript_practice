var alan = {
  nombre: 'Alan',
  apellido: 'Quispe',
  edad: 27
}

var jorge = {
  nombre: 'Jorge',
  apellido: 'Morales',
  edad: 28
}


function nombreMayuscula(persona){
  var nombre = persona.nombre.toUpperCase()
  console.log(nombre)
}

/** 
 * Seguros que siempre vamos a recibir un objeto
 *  con el atributo apellido.
 */
function apellidoMayuscula({ apellido }){
  console.log(apellido.toUpperCase())
}

nombreMayuscula(alan)
nombreMayuscula(jorge)
apellidoMayuscula(alan)
apellidoMayuscula(jorge)
apellidoMayuscula({ apellido: 'Gomez'})
apellidoMayuscula({ apellido: 'Fernandez', edad:'27'})
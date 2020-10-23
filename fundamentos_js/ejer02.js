/**
* El objeto es pasado por referencia
* la operacion afectara al obj original.
*/

function cumpleanos(persona){
  persona.edad += 1
}

/**
 * Retorna un nuevo objeto sin afectar
 * al original.
 * "... Operador de propagación"
 */
function cumpleanos2(persona){  
  return {
    ...persona,
    edad: persona.edad+1 //no persona.edad++
  }
}

var alan = {
  nombre: 'Alan Quispe',
  edad: 27,
  profesion: 'Informático'
}

cumpleanos(alan)
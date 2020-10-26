/**
 * En principio, cualquier tarea que se haya
 * delegado al navegador a través de un callback,
 * deberá esperar hasta que todas las instrucciones 
 * del programa principal se hayan ejecutado. 
 * Por esta razón el tiempo de espera definido
 * en funciones como setTimeout, no garantizan
 * que el callback se ejecute en ese tiempo exactamente, 
 * sino en cualquier momento apartir de allí, 
 * sólo cuando la cola de tareas se haya vaciado.
 */

console.log('a')
setTimeout(() => console.log('b'), 2000) // 2 segundos
console.log('c')
/**
 * Salida: a, c, b
 */

console.log('a')
setTimeout(() => console.log('b'), 0)
console.log('c')
/**
 * Salida: a, c, b
 */

setTimeout(() => console.log('d'), 2000)
for (let i = 0; i < 10000000; i++) {
}


/**
 * Trabajar con el DOM, es ASINCRONO
 * Mostrar un Alert, es ASINCRONO
 * Peticion a una API, es ASINCRONO
 */


/**
 * En sintesis, sabremos que la función 
 * será demorada cuando hagamos un callback. 
 * Que es una función que tenga como argumento 
 * otra función. Es decir que se requiere el 
 * resultado de la función b para completar a.
 */

 /**
  * Una API es una interfaz cuya finalidad es comunicar aplicaciones entre sí.
Cuando se construye un sitio web, es muy común utilizar distintas APIS que han 
sido desarrolladas por otras personas/empresas, esto ayuda muchísimo para no 
perder tiempo “reinventando la rueda”.
Por ejemplo, existe una API llamada formsubmit.co, que te permite enviar 
datos desde una pagina a un correo eléctronico sólo poniendo tu dirección 
de correo en un link, esto es muy útil porque sino tendrías que crear toda 
una aplicación de servidor para poder enviar correos desde tu pagina a tu 
cuenta de correo.
Ahora, swapi.co (ahora swapi.dev) es una API REST, las API REST son servicios 
que te brindan datos de algo en específico. Es muy común utilizar API REST en 
desarrollo web ya que al programar una pagina NO tienes acceso a una base de 
datos (no directamente), pero esta API REST sí puede comunicarse con una base 
de datos, entonces estaría actuando como intermediario para brindarte los datos 
que deseas. swapi.dev te brinda información sobre Star wars, para que puedas 
utilizar dicha información en tus aplicaciones, ya sea para practicar o profesionalmente. 
Existen muchas API REST gratuitas en internet, las más populares son:
-Pokeapi (te brinda datos de pokemon, obviamente)
-The Movie Api (Te brinda datos de películas, estrenos, repartos, sinopsis, banners, etc)
-etc

Las API REST son buenísimas porque te brindan la información y tú sólo te encargas 
de manipularla y mostrarlas.
Recomiendo ver algún video de Como hacer un pokedex con Javascript, ahí consumen 
los datos de la pokeapi (cualquier tutorial sirve).
  */
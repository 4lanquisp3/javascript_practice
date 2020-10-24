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
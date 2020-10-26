/**
 * Vimos que con los callbacks teniamos un
 * problema grande con los callbacks anidados
 * el codigo se vuelve bastante ilegible, las
 * PROMESAS resuelven este problema.
 *
 * PROMESAS, pensemos en las promesas como valores
 * que aún no conocemos, es la promesa de que ahí
 * va haber un valor cuando una accón ASINCRONA suceda
 * y se resuelva.
 * Las PROMESAS tiene 3 estados en los que pueden estar
 */

/**
 * Una promesa se inicia en este estado:
 * 
 * PENDING
 * 
 * Si la promesa se resuelve exitosamente, pasa al estado
 * 
 * FULFILLED  ---> Get Respuesta: .then(val => ... )
 * 
 * Si ocurre algun error en la acción asincrona:
 * 
 * REJECTED   ---> Get Code Error: .catch(err => ...)
 */
/**
 * Las promesas funcionan de manera Asincrona, pero no 
 * siempre es así, las promesas pueden resolverse de manera
 * sincrona, es decir resolver una promesa que devuelva un numero
 * sin realizar ninguna tarea asincrona, tambien es algo posible.
 */

/**
 * Creación de PROMESAS, es un objeto como cualquier otro de JS
 * 
 * new Promise(function(resolve, reject){
 *  ...
 * }).then(valor => {
 *  ...
 * }).catch(err => {
 *  ...
 * })
 * 
 * resolve y reject, son funciones q debemos llamar si la promesa
 * se resuelve exitosamente o sucede algun error
 * 
 */

 /**
  * Encadenando promesas, luego de llegar al estado FULFILLED, podemos
  * retornar otra promesa dentro del .then() y de esa manera ir encadenandolas.
  * 
  */
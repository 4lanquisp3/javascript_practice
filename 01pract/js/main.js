document.write("hola mundo en el documento")
console.log("hola mundo en la consola")
// alert("hola mundo como alerta!")

// VARIABLES ELEMENTOS HTML 
var segundo_parrafo = document.querySelector("#main")
console.log(segundo_parrafo)

// VARIABLES OBJETOS
var planta = {
  color: 'verde',
  tamaño: 'grande',
  cantidad: 3
}

// VARIABLES FUNCIONES
var saludar = function(){
  console.log("hola mundo de nuevo!!!")
}  

// HOISTING
/* El navegador lee de arriba hacia abajo */
/* MUEVE SIEMPRE LAS DECLARACIONES
DE LAS VARIABLES AL INICIO DEL DOCUMENTO O 
DE LA FUNCION, LO HACE ANTES QUE NADA
LAS INICIALIZACIONES POR EJEMPLO NO LAS MUEVE
AL INICIO */

// DECREMENTO
var edad = 25
incremento = ++edad // Primero incrementa y luego asigna
decremento = --edad // Primero decrementa y luego asigna
console.log(incremento)
console.log(decremento)

var booleano = "35" == "37" // false

// == igual en valor
// === igual en valor y tipo

// != diferencia en valor
var n = 3
var n2 = "3"
var bool2 = n != n2
console.log(`Son diferentes en valor ? ${bool2}`) // false

// !== diferencia en valor y/o tipo
var n = 3
var n2 = "3"
var bool2 = n !== n2
console.log(`Son diferentes en valor y/o tipo? ${bool2}`) // true
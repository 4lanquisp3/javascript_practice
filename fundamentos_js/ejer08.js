/**
 * Las clases en JS no son
 * nada mas que nada menos 
 * que PROTOTIPOS
 */

/**
 * Constructor o prototipo
 */
function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.edad = 20
  // return this -> Implicitamente nos retorna el OBJ
}

/**
 * Los prototipos son objetos
 * Estas estas funciones y el prototipo
 * deben ir antes en un mismo lugar para
 * que despues esten accesibles mas adelante 
 */
Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soy_alto = function(){
  return this.altura > 1.7
}

/**
 * Si convertimos las funciones en Arrow functions
 * veremos que this cambia, y ahora es window
 * lo veremos claro si ponemos un debugger
 * (solo posar el puntero del mouse sobre this)
 */
/**
 * Entonces las Arrow Functions cambiar
 * quien es this.
 */
Persona.prototype.soy_alto2 = () => {
  debugger
  return this.altura > 1.7
}
/** En la consola >this === window
 *  Window es el objeto global 
 */


var alan = new Persona('Alan','Quispe',1.69)
alan.saludar()

var carlos = new Persona('Carlos','Quinteros',1.71)
var ale = new Persona('Alejandra','Ramos',1.54)
var juan = new Persona('Juan','Perez',1.64)

/**
 * Aporte de un 
 * Recuerdo que tuve problemas par entender esto al principio pero lo entendí así:
  Las arrow functions tienen el método .bin() implicitamente y el método .bind() devuelve un nuevo objeto con this haciendo referencia al objeto global(objeto window).

  Persona.prototype.soyAlto = () => this.altura > 1.8
  es lo mismo que:

  Persona.prototype.soyAlto = (function () {
    return this.altura > 1.8
  }).bind(this)
 */
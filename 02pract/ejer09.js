/**
 * En javascript no existe la Herencia como tal
 * lo que si existe es HERENCIA PROTOTIPAL
 */
/**
 * Crearemos un prototipo como hijo, que va a
 * ser un subtipo de Persona, digamos un Desarrollador
 * Entonces este prototipo Desarrollador va a ver si puede
 * responder al metodo que queremos llamar, si no sabe
 * buscará en el prototipo padre, si no lo encuentra va
 * seguir esa cadena de buscar en el prototipo padre, padre,
 * padre, hasta llegar al prototipo base de todos los objetos,
 * Que es OBJECT.
 * Si Object no conoce ese mensaje JS recien lanza el error 
 */

/** Los objetos siempre son prototipos */
function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () { } //fn o noop -> Significa: no hace nada
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

/** todas las funciones tienen el atributo prototype
 * prototipoHijo, prototipoPadre son funciones
 */

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.edad = 20
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soy_alto = function () {
  return this.altura > 1.7
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

// si lo ponemos despues de saludar 
// lo sobreescibira el de persona
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

/**
 * En la consola:
 * > Persona
 * > Persona.prototype
 * Prototype es un atributo q tiene todas
 * las funciones y q es un objeto y tiene
 * un attr __proto__ que apunta al prototipo
 * padre q tiene, Object es el ultimo en la
 * cadena de herencia
 * > Desarrollador.prototype
 * Veremos claro que tiene un atributo
 * __proto__ y otro dentro anidado
 * Si a este objeto le decimos que ejecute
 * soyAlto(), lo q va hacer es fijarse en su
 * prototipo(__proto__) si encuentra ese metodo
 * si no lo encuentra va ir a buscarlo al prototipo
 * de ese prototipo y asi sucesivamente se van a ir
 * pasando mensajes entre los prototipos, si ninguno
 * lo resuelve va llegar a Object y Object va tratar de
 * ejecutar ese metodo, si no puede ejecutarlo, ahí recien se
 * va lanzar un error de JavaScript
 *  */


 var arturo = new Desarrollador('Arturo','Martinez',1.89)
 var sacha = new Persona('Sacha','Lifszyc',1.72)
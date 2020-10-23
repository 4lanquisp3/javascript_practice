/**
 * JavaScript se fue actualizando apartir del 2015
 * por eso vamos a encontrar distintas versiones
 * Ecmascript2015,Ecmascript2016,Ecmascript2017
 * Ecmascript2018, son los estandares en el que se basa JS.
 * ahora usaremos Class pero no debemos olvidar que por
 * debajo todo es un prototipo.
 */

class Persona{
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura) // 1ro
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }
}
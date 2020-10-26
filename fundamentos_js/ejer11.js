class Persona{
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn){ //fn es opcional 
    /* var nombre = this.nombre
    var apellido = this.apellido */
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if(fn){
      fn(nombre, apellido)
    }
  }

  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura) // 1ro
  }

  saludar(fn){
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah mirá, no sabía que eras Dev`)
  }
}

var juan = new Persona('Juan','Perez',1.74)
var carlos = new Desarrollador('Carlos','Gomez',1.85)
var ale = new Persona('Alejandra','Oblitas',1.59)

juan.saludar()
carlos.saludar(responderSaludo)
ale.saludar(responderSaludo)


/* 
Valores falsy (valores falsos) en Javascript:

false

0

null

""

undefined

NaN

Los demás son valores Truthy (valores verdaderos).
*/
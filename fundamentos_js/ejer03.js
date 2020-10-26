var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 14
}

var ramiro = {
  nombre: 'Ramiro',
  edad: 21
}

/**
 * Es recomendable usar constantes
 * y no numeros sueltos en el codigo
 * por que luego nos tomará mas
 * tiempo comprender su significado
 */
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}
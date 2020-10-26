/**
 * Práctica: 
 * Crear los objetos Computadora, Celular y Tablet, con sus respectivos atributos
 * crear tres funciones que muestren formateado las propiedades de cada objeto
 */

 var computadora = {
   ram: '8GB',
   hd: '250GB',
   procesador: 'core i3',
   color: 'negro',
 }

 var celular = {
   ram: '4GB',
   resolucion: 1024,
   homologado: true,
   color: 'verde',
   marca: 'xiami'
 }

 var table = {
   ram: '6GB',
   color: 'verde',
   precio: 34.5,
   marca: 'samsung'
 }

 function format1(computadora){
  console.log("Preciosa Computadora")
  console.log(`Memoria RAM: ${computadora.ram}`)
  console.log(`Disco Duro: ${computadora.hd}`)
  console.log(`Procesador: ${computadora.procesador}`)
  console.log(`Color: ${computadora.color}`)
 }

 format1(computadora)

 function format2({ ram, resolucion, marca, homologado }){
  console.log(`Celular de calidad`)
  console.log(`Memoria RAM: ${ram}`)
  console.log(`Resolucion: ${resolucion}`)
  console.log(`Marca: ${marca}`)
  console.log(`Homologado: ${homologado}`)
 }

 format2(celular)

 function format3({ ram, marca }){
  console.log(`Memoria RAM: ${ram}`)
  console.log(`Marca: ${marca}`)
 }

 format3(table)

 format3({ ram: '24GB', marca: 'huawey' })
 
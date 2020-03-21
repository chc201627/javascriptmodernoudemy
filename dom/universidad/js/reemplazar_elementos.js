//Reemplzar elementos

const nuevoEncabezado = document.createElement('h2')

//agregar un id
nuevoEncabezado.id = 'encabezado'
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));
// Elemento anterios (sera reemplzado)

const anterior  = document.querySelector('#encabezado')

const elPadre = document.querySelector('#lista-cursos')
//Reempalzar
elPadre.replaceChild(nuevoEncabezado,anterior)
console.log(nuevoEncabezado);
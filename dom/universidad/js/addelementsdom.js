//crear enlace

const enlace = document.createElement('a');

//agregamos una clase
enlace.className = 'enlace'
//añadir id
enlace.id = 'nuevo-id'
enlace.setAttribute('href','#')
//añadir texto
enlace.textContent = 'Hola'
//agregar al html
document.querySelector('#secundaria').appendChild(enlace)
console.log(enlace);
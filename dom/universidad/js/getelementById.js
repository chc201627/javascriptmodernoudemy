//getElementoByID

let encabezado;
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333'
encabezado.style.color = '#fff'
encabezado.style.padding = '20px';

//cambiar el texto
encabezado.textContent = 'Hola'
encabezado.innerText = 'Hola2'

console.log(encabezado.textContent);
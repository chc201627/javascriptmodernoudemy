//Funcion declaration

function saludar(nombre = 'Visitante') {
    return `Hola ${nombre}`
}

let saludo;

saludo = saludar('Juan');

console.log(saludo);

// Function expression

const suma = function(a= 0,b = 5){
    return a + b;
}
console.log(suma(1));

// IIFE

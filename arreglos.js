const numeros = [10,20,30,40,50];
console.log(numeros);

// Areglos de String 
const meses = new Array('Enero','Frebrero','Marzo');
console.log(meses);
//Saber si es arreglo
console.log(Array.isArray(meses));
//Acceder a un valor de un arreglo
console.log(meses[1]);

//Agrelos mezclado

const mezclado = ['Hola', 20, true,null, false,undefined]


// Añadir en una arreglo
meses.push('Abril');
// Añadir al inicio del arreglo
meses.unshift('Mes 0');
// Eleminiar un elemento de arreglo
meses.pop()
//eliminar un elelemento de arreglo (el primero)
meses.shift()
//Quitar un rango
meses.splice(2,1);
//Revertir
meses.reverse
// Unir un arreglo con otro
let arreglo1 = [1,2,3],
    arreglo2 = [3,4,5]

console.log(arreglo1.concat(arreglo2));

// Orderna un arreglo
const frutas = ['Platano','Manzana','Fresa','Naranja','Zanahora']
frutas.sort()
console.log(frutas);
//Encontrar un elemento en el arreglo

console.log(meses.indexOf('Abril'));
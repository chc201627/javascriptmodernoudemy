const ciudades = ['Londres','New York','Madrid','Paris']
const ordenes = new Set([123,231,131,102])
const datos = new Map()
datos.set('nombre','Juan')
datos.set('profesion','desarrollador')
console.log(ciudades);
console.log(ordenes);
console.log(datos);

//Entries ubterador

for(let entrada of ciudades.entries() ){
    console.log(entrada);
}

//Entries ordenes
for(let entrada of ordenes.entries() ){
    console.log(entrada);
}

//Entrie map

for(let entrada of datos.entries() ){
    console.log(entrada);
}

//Values iterador
//Valuue a kas ciudades
for(let entrada of ciudades ){
    console.log(entrada);
}
//Valuue a kas ordenes
for(let entrada of ordenes ){
    console.log(entrada);
}
//Valuue a map
for(let entrada of datos){
    console.log(entrada);
}
//keys iterador
//keys ciudades
for(let entrada of ciudades.keys() ){
    console.log(entrada);
}
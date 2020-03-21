const  pendientes = ['Tarea','Comer','Proyecto','Aprender']

pendientes.forEach((pendiente, index)=>{
    console.log(`${index} : ${pendiente}`);
})

// Map para recorrer un arreglo de objetos

const carrito = [
    {id:1, producto: 'Libro'},
    {id:2, producto: 'Camisa'},
    {id:3, producto: 'Guitarra'},
    {id:4, producto: 'Disco'},
]

const nombreProducto = carrito.map((carrito)=>{
    return carrito.producto
})
console.log(nombreProducto);
const automovil ={
    modelo: 'Camaro',
    motor: 6.1,
    año: 1969,
    marca: 'Mazda',
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}


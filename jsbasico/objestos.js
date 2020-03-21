//Crear Objeto
const persona = {
    nombre:'Camilo',
    apellido:'Hurtado',
    profesion:'It',
    emali: 'chc@sessionStorage.com',
    edad: 30,
    musica: ['Trance','Rock','Salsa'],
    hogar:{
        ciudad:'Cali',
        pais:'Colombia'
    },
    fechaCumple: ()=> new Date().getFullYear() - this.edad
}

console.log(persona);
console.log(persona.edad);
console.log(persona.musica);
console.log(persona.hogar.ciudad);
console.log(persona.fechaCumple());
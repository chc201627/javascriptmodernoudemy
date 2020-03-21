let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.URL;
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.images;


//scripts
elemento = document.scripts;
elemento = document.images;
let imagenes  = document.images;
let imagenesArr = Array.from(imagenes);
imagenesArr.forEach((imagen)=>{
    console.log(imagen);
})
console.log(imagenesArr);
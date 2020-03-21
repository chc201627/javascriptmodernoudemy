const diaHoy = new Date();

// Fecha en especifico Mes, Dia y Año
let navidad2017 = new Date('12-25-2017')
console.log(navidad2017);

let valor;
//Mes
valor = diaHoy.getMonth();
//Dia
valor = diaHoy.getDay();
//Año
valor = diaHoy.getFullYear();
//Minutos
valor = diaHoy.getMinutes();
//hora
valor = diaHoy.getHours();
//Regresa  miisegundos desde 1970
valor = diaHoy.getTime();

valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();
console.log(valor);

try{

    algo();
}catch(error){
    console.log(error);
}finally{
    console.log('Ni ke unoirtam ejecuta de todos modos');
}
obtenerCLientes();

function obtenerCLientes() {
    console.log('Descargando...');
    setTimeout(function(){
        console.log('Completo');
    },3000)
}
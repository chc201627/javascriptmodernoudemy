var a = 'a'
let b = 'b'
const c = 'c'

function funcionScope(){
    var a = 'A'
    let b = 'B'
    const c = 'C'
    console.log('FUNCION: '+a,b,c);
}
funcionScope()

console.log('Globales: ' + a,b,c);
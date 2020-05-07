const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];
//console.log(comando)

switch(comando){
    case 'listar':
        
        console.log('listar');

        listarTabla(argv.base, argv.limite)
                    .then(mensaje=>{
                        console.log(mensaje)
                    })
                    .catch(e=>console.log(e))

        break;

    case 'crear':
        
        console.log('crear');
        //console.log(argv.limite)
       
        crearArchivo(argv.base, argv.limite)
            .then(archivo=>{
                console.log(`El archivo con nombre ${archivo} ha sido creado!!!!`)
            })
            .catch(e=>{
                console.log(e)
            });

        break;
    default:
        console.log('Comando no reconocido')
}


//console.log(process.argv)
/*
let argumento = process.argv[2];
let base = argumento.split('=')[1];
console.log(base)
*/

/*

*/
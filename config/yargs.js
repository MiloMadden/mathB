
const argv = require('yargs')
.command('listar', 'Imprimer tablas de multiplicar en la consola', {
    base: {
        demand: true, 
        alias: 'b'
    }, 
    limite: {
        alias: 'l', 
        default: 10
    }
})
.command('crear', 'Crea tablas de multiplicar en un archivo', {
    base: {
        demand: true, 
        alias: 'b'
    }, 
    limite: {
        alias: 'l', 
        default: 10
    }
})
.help()    
.argv;

module.exports = {
    argv
}
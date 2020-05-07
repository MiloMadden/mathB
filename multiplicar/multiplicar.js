const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite)=>{
    
    
    return new Promise((resolve, reject)=>{
        
        let info = '';

        if(!Number(base)){
            reject('Introduce un numero como base')
        }
        if(!Number(limite)){
            reject('Introduce un numero como limite')
        }

        for( i=0 ; i <= limite ; i++){
            info += `${base} x ${i} = ${base*i}\n`;
        }

        resolve(info.green)

    })



    console.log(info)

}

let crearArchivo = (base, limite)=>{
    
    return new Promise( (resolve, reject)=>{
        
        if(!Number(base)){
            reject('Introduce un numero como base')
        }
        if(!Number(limite)){
            reject('Introduce un numero como limite')
        }

        let data = '';

        for( i = 1; i <= limite; i++ ){
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {reject(err);}
            else{
                resolve(`tabla-${base}.txt`.rainbow);
            }
            
        });
    } )
}

module.exports = {
    crearArchivo, 
    listarTabla
}
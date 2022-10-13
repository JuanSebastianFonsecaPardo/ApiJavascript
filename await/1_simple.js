const xmlHttpRequest = require('xmlHttpRequest').XMLHttpRequest
const axios = require('axios')
const colors = require('colors');
const url = "https://pokeapi.co/api/v2/type"




//Invocar la funcion


//async await

const f = async function(){
    try{
        let response = await get_data(url)
        exito(response.body
            )
    }catch(error){
        fallo()
    }
}

//Funcion callback:exito
function exito(response){
    const tipos = response.results
    tipos.forEach(element => {
        console.log('---------------------------')  
        console.log(`Tipo: ${element.name}`)
        console.log('---------------------------')        
    });
}

//Funcion callback:fallo
function fallo(status){
    console.log(status)
} 

f()

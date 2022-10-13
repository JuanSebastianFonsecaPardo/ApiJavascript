const axios = require('axios')

const endpoint = "https://pokeapi.co/api/v2/type"

let config = {
    url: endpoint,
    method: 'get'
}


const f = async function(){
    try{
        let response = await axios(config)
        exito(response.data)
    }
    catch(error){
        fallo(error)
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
const { await } = require("await")
const needle = require("needle")
const endpoint = "https://pokeapi.co/api/v2/type"

const f = async() => {
    try {
        const response = await needle( 'get' , endpoint)
        exito(response.body)
    } catch (error) {
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

const { await } = require("await")
const needle = require("needle")
const endpoint = "https://restcountries.com/v3.1/all"

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
    const paises = response
    paises.forEach(element => {
        console.log('---------------------------')  
        console.log(`Nombre: ${element.name.common}`)
        console.log('---------------------------')        
    });
}

//Funcion callback:fallo
function fallo(status){
    console.log(status)
} 

f()

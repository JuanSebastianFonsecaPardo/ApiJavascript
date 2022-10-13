const { await } = require("await")
const needle = require("needle")
const endpoint = "https://parallelum.com.br/fipe/api/v1/carros/marcas"

const f = async() => {
    try {
        const response = await needle( 'get' , endpoint)
        console.log(response.body)
    } catch (error) {
        fallo(error)
    }
}

//Funcion callback:exito
function exito(response){
    const paises = response
    paises.forEach(element => {
        console.log('---------------------------')  
        console.log(`Nombre: ${element}`)
        console.log('---------------------------')        
    });
}

//Funcion callback:fallo
function fallo(status){
    console.log(status)
} 

f()

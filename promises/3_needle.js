const needle = require('needle')
const colors = require('colors')
const endpoint = "https://pokeapi.co/api/v2/type"

needle('get', endpoint)
.then((response)=>{
    return response.body.results
})
.then((tipos_pokemon)=>{
    tipos_pokemon.forEach(Element=> {
        console.log('---------------------------') 
        console.log(Element.name)
        console.log('---------------------------') 
    })
})
.catch((error)=>{
    console.error(error)
})
import React, {useState} from "react";
import axios from 'axios'

const ApiAxios = ()=>{

// create a variable to store all the pokemon in that we get back.
    let [pokemonList, setPokemonList] = useState([])  
    
    
    const getApi = ()=>{

        console.log("getting Pokemon")
        
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000")
        
            .then(convertedResponse =>{
                console.log("getting =====> Response from =====> Pokemon", convertedResponse)
                setPokemonList(convertedResponse.results)//data
                console.log(pokemonList)
            })
            
            .catch(err=>{ 
                console.log(err)
            })
            
        console.log("doing other stuff while waiting for the api results to come back.") 
            
    }
    
    
    
    return(
    <div>
        <button onClick={getApi}>Fetch Pokemon</button>
        
        {
            pokemonList.map((pokemon, idx)=>{
                return(
                    <div>
                        <h3>{pokemon.name}</h3>
                    </div>
                )
            })
        }
    </div>
    
    )
}


export default ApiAxios;
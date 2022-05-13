import React, {useState} from "react";

const Api = ()=>{

// create a variable to store all the pokemon in that we get back.
    let [pokemonList, setPokemonList] = useState([])  
    
    
    const getApi = ()=>{
        console.log("getting Pokemon")
        // fetch gives back a promise. A promise is a set of code that is asynchronous (It does not go from line to line) where the response time is not exact and we can allow it to perform some task or run some code when it gets back the response. When it gets back the response, we can tell it what to do in the .then() 
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000")
        
            .then(response =>{//.then means whenever the api is done getting back the data.
                return response.json()// convert the response to json that our application can read.
            })
            
            .then(convertedResponse =>{
                console.log("getting =====> Response from =====> Pokemon", convertedResponse)
                setPokemonList(convertedResponse.results)
                console.log(pokemonList)
            })
            
            .catch(err=>{ //.catch is for if there is any issue in getting the data.
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


export default Api;
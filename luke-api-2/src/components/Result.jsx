import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import People from './People';
const Result = () => {

    let {category, id} = useParams();
    // state variable to save the information we get back from the api into
    let [detail, setDetail] = useState({})
    
    //state variable to save the information we get back from the api into
    let [error, setError] = useState(false);
    
    useEffect(()=>{
        // Make an axios call to the starwars api using axios
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(response=>{
                setError(false);
                console.log("response-->", response)
                
                setDetail(response.data)
            })
            .catch(err=>{
                console.log("errrrrror",err)
                setError(true)
            })
    },[id, category])
    

    return (
        <div>
        
            {
            error == true?
                <>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlzIcHiMPa4BniVXtT47ihuEaTdoetnYxHw&usqp=CAU" width="300px"></img>
                    <h1>These are not the droids you're looking for</h1>
                </>
                :
            category == "people"?
                <div>
                    <People detail = {detail}></People>
                </div>: category =="planets"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Climate: {detail.climate}</p>
                    <p>Terrain: {detail.terrain}</p>
                    <p>Population: {detail.population}</p>
                </div>: category == "species"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Language: {detail.language}</p>
                    <p>Skin Colors: {detail.skin_colors}</p>
                    <p>Classification: {detail.classification}</p>
                </div>:
                <h1>These are not the droids you're looking for</h1>
            
        }       
        </div>
    );
};


export default Result;
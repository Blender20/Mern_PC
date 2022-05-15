import React from 'react';
import { useParams} from "react-router";

const Hello = ()=>{

    const { id,color } = useParams();
    console.log("id is and color are-->", id, color)
    // if the id is a number, show "team # is", if the id is not a number, show"team name is":
    return (
        <>
        
        <div style = {{backgroundColor: color, color: 'blue'}}>
            {
            
                id === undefined?
                <p>The word is: hello</p>:
                
                isNaN(id)?
                    // id == "lakers"? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQK0svAsMH6-PoAJrSm-k_2ldMtKTcrMLNmg&usqp=CAU" width="200px" alt="" />:
                    <h4>The word is: {id} </h4> :
                    <h4>The number is: {id} </h4>
            }
        </div>
        </>
    )
}

export default Hello;

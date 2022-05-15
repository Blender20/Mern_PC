import React from 'react';
import { useParams} from "react-router";

const Teams = ()=>{

    const { id,color } = useParams();
    console.log("id is and color are-->", id, color)
    // if the id is a number, show "team # is", if the id is not a number, show"team name is":
    return (
        <>
        <h3>Teams Components.</h3>
        <ol>
            <li>Lakers</li>
            <li>Wizards</li>
            <li>Mavs</li>
            <li>Suns</li>
            <li>Knicks</li>
        </ol>
        <hr />
        <div style = {{backgroundColor: color}}>
            {
            
                id === undefined?
                <p>What is your favorite team?</p>:
                
                isNaN(id)?
                    id == "lakers"? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQK0svAsMH6-PoAJrSm-k_2ldMtKTcrMLNmg&usqp=CAU" width="200px" alt="" />:
                    <h4>Displaying information team name is: {id} </h4> :
                    <h4>Displaying information team # is: {id} </h4>
            }
        </div>
        </>
    )
}

export default Teams;
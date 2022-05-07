import React from 'react'

const Card = (props) => {
    console.log(props)
    const {name, lastName, age, hairColor} = props;
    return (
        <>
            <div>
                <h2>{lastName} {name} </h2>
                <h4>Age: {age}</h4>
                <h4>Hair Color: {hairColor}</h4>
            </div>
            <hr />
       </>
    )
}

export default Card;
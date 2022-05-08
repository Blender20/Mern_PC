import React, {useState} from 'react'

const Card = (props) => {
    console.log(props)
    const {name, lastName, hairColor} = props;
    
    // const addBirthday = ()=>{
    //     age++;
    //     console.log(age)
    
    
    // }
    let [age, setAge] = useState(props.age)
    const addBirthday = ()=>{
        setAge(age+1)
    }
    
    return (
        <>
            <div>
                <h2>{lastName} {name} </h2>
                <h4>Age: {age}</h4>
                <h4>Hair Color: {hairColor}</h4>
                {/* <button onClick={()=>alert("button was clicked")}>Increase the Birthday for {age}</button> */}
                <button onClick={addBirthday}>Increase the Birthday for {age}</button>
            </div>
            <hr />
        </>
    )
}

export default Card;
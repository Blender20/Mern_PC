import React, {useState} from 'react';

const Form = ()=>{

    // Create a State variable for each input that will store the information inside each input.
    let [firstName, setName] = useState("");
    let [lastName, setlastName] = useState("");
    let [age, setAge] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [ConfirmPassword, setConfPassword] = useState("");
    let [type, setType] = useState("");
    let [date, setDate] = useState("");
    let [description, setDescription] = useState("");
    let [imgUrl, setImgUrl] = useState("");
    
    return(
        <>
            <h3>Please fill out the form completely</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={(e)=>setlastName(e.target.value)} name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" onChange={(e)=>setAge(e.target.value)} name="" id="" className="form-control" />
                </div> */}
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="text" onChange={(e)=>setPassword(e.target.value)} name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input type="text" onChange={(e)=>setConfPassword(e.target.value)} name="" id="" className="form-control" />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <select className='form-select' name="" id="" onChange={(e)=>setType(e.target.value)}>
                        <option value="Dog">Dog</option>  
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                    </select>
                </div> */}
                {/* <div className="form-group">
                    <label htmlFor="">Appointment Date:</label>
                    <input type="date" onChange={(e)=>setDate(e.target.value)} name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <textarea className='form-select' ClassName ="form-control" name="" id="" cols="30" rows="10" onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image Url</label>
                    <input type="text" onChange={(e)=>setImgUrl(e.target.value)} name="" id="" className="form-control" />
                </div> */}
                <input className='btn btn-success mt-3' type="submit" value="Submit" />
            
            </form>
            <hr />
            <h3>Your Forms info:</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            {/* <p>Age: {age}</p> */}
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {ConfirmPassword}</p>
            {/* <p>Type: {type}</p> */}
            {/* <p>Date: {date}</p> */}
            {/* <p>Description: {description}</p> */}
            {/* <p>Img Url: {imgUrl}</p>
             */}
        </>
    )
}

export default Form;
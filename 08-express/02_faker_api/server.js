const express = require("express")// import express so we can use express features\
const { faker } = require('@faker-js/faker');//import faker library so we can use it.

const app = express(); //create our app variable which is an instance of express
const port = 8000;



// app.get("/api/hello", (req, res)=>{
//     res.json({msg: "Wazaaap"});
// })
class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this._id = faker.datatype.uuid();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.password = "12525+565";
        
    }
}
class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {street: faker.address.streetAddress(), city: faker.address.cityName(), state: faker.address.stateAbbr(), zipcode: faker.address.zipCode(), country: faker.address.country()}
    }
}


app.get("/api/user", (req,res)=>{
    //create a user
    let newUser = new User();
    //respond with json with info about the user
    res.json(newUser)
})

app.get("/api/company", (req,res)=>{
    //create a Company
    let newCompany = new Company();
    //respond with json with info about the user
    res.json(newCompany)
})

app.get("/api/user/company", (req,res)=>{
    //create a Company & user name
    let newUser = new User();
    let newCompany = new Company();
    res.json({newUser, newCompany})
})


// THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));
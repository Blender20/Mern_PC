const Joke = require("../models/joke.model");// import the model so that the controller knows how to talk to the database to query the database.
const jokeRoutes = require("../routes/joke.routes");

module.exports.hello = (req, res)=>{
    res.json({msg: "wazzaap mongoose jokes api"})
}

// find one Joke
module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id})
    .then(foundJoke =>{
        res.json({results: foundJoke})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

// finds all Jokes
module.exports.findAllJokes = (req, res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}
// find a Random Joke
module.exports.findRandomJoke = (req, res)=>{
    Joke.find()
    .then(allJokes=>{
        // get a random index number from index 0 up to but not including the allQuotes.length
        let randomIdx = Math.floor(Math.random()*allJokes.length)
        res.json({results: allJokes[randomIdx]})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

// Create a Joke
module.exports.createJoke = (req, res)=>{
    //req.body represents form information
    Joke.create(req.body)
    .then(newlyCreatedJoke=>{
        res.json({results: newlyCreatedJoke})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

//Updating a Joke
module.exports.updateJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body, //Specify the form information to update the Joke with
        {new: true, runValidators: true }
    )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(deleteJoke=>{
        res.json({results: deleteJoke})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}
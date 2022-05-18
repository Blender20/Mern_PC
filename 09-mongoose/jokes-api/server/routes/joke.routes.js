const JokeController = require("../controllers/joke.controller");


module.exports = (app)=>{
    //routes here
    app.get("/api/hello", JokeController.hello);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes", JokeController.createJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
    
    }
    
    //all the static api's should be on top
    //all the dynamic api's should be at the bottom
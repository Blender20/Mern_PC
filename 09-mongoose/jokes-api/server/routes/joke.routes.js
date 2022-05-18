const JokeController = require("../controllers/joke.controller");


module.exports = (app)=>{
    //routes here
    app.get("/api/hello", JokeController.hello);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes", JokeController.createJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
    
    }
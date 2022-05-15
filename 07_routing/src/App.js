
import './App.css';
import {Routes, Route,BrowserRouter, Link, Switch} // This will enable routing for the application. Otherwise the routing feature won't work.
   //Switch lets us determine which components/elements need to show up only at certain routes.
 //Route lets us specify the route url address for an element to show up in.
// Links acts just like an href (anchor tag)but it will not reload the page
from "react-router-dom";
import About from './components/About';
import Players from './components/Players';
import Teams from './components/Teams';
import Home from './components/Home';
import Hello from './components/Hello'


function App() {
  return (
  <>
    <BrowserRouter>
    <div className="App">
      
      <div className="navbar">
      <h1>Routing Intro</h1>
        <ul id="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/teams">Teams</Link></li>
        </ul>
      </div>
      
    
      <Routes>
      <Route exact path="/home" element={
        <>
        <Home></Home>
        </>
        }>
        </Route>
        <Route exact path="/hello" element={
        <>
        <Hello></Hello>
        </>
        }>
        </Route>
        <Route exact path="/hello/:id" element={
        <>
        <Hello></Hello>
        </>
        }>
        </Route>
        <Route exact path="/hello/:color/:color" element={
        <>
        <Hello></Hello>
        </>
        }></Route>
        <Route exact path="/about" element={
        <>
        <About></About>
        </>
        }>
        </Route>
        <Route exact path="/players" element={
        <>
        <Players></Players>
        </>
        }>
        </Route>
        <Route exact path="/teams" element={
        <>
        <Teams></Teams>
        </>
        }>
        </Route>
        <Route exact path="/teams/:id" element={
        <>
        <Teams></Teams>
        </>
        }>
        </Route>
        <Route exact path="/teams/:id/:color" element={
        <>
        <Teams></Teams>
        </>
        }>
        </Route>
      </Routes>
      </div>
      
    </BrowserRouter>
    </>
    
  
  );
}

export default App;

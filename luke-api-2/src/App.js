
import './App.css';
import {
  BrowserRouter,// this enables the routing
  Switch,
  Route,
  Link 
} from "react-router-dom";

import Form from './components/Form';
import Result from './components/Result';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Luke API Walker</h1>
        <Form></Form>
        <Switch>
          <Route exact path = "/:category/:id">
            <Result></Result>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

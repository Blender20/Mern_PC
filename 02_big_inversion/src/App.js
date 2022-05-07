
import './App.css';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <h1>Big Inversion</h1>
      <Card lastName = {"Doe"} name = {"Jane"}  age = {50} hairColor= {"Black"}></Card>
      <Card lastName = {"Smith"} name = {"John"}  age = {88} hairColor= {"Brown"}></Card>
      <Card lastName = {"Fillmore"} name = {"Millard"}  age = {50} hairColor= {"Brown"}></Card>
      <Card lastName = {"Smith"} name = {"Maria"}  age = {62} hairColor= {"Brown"}></Card>
      
      
    </div>
  );
}

export default App;
 
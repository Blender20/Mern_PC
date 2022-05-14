
import './App.css';
// import Api from './components/Api';
import ApiAxios from './components/ApiAxios';
function App() {
  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      {/* <Api/> */}
      <ApiAxios />
    </div>
  );
}

export default App;

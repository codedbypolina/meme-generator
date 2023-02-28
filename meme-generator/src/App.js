import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import data from "../src/memeData"


function App() {
  return (
    <div className="App">
      <Header />
      <Main item={data} />
    </div>
  );
}



export default App;

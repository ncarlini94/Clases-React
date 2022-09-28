import './App.css';
import Form from './components/form/form';
import Logo from "./logo.png"

function App() {
  return (
    <div className="App">
    <div className='App-header'>
    <img src={Logo} className="App-logo" alt="logo"></img>
    <Form/>
    </div>
    </div>
  );
}

export default App;

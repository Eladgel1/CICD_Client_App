import spidey from './Assets/spidey.png';
import './App.css';
//import BlueButton from './Components/BlueButton';
import NamesInput from './Components/NamesInput';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={spidey} className="App-logo" alt="logo" />
        <p>
          This is our CICD Client Example
          hahahahahahahahahahaha
        </p>
          <NamesInput label={'Please enter your first and last name: '}/>
          Learn React
      </header>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Display from './Components/Display';
import Input from './Components/Input';
import Title from './Components/Title';


function App() {
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="App">
       <Title />
       <Display value={displayValue}/>
       <Input  setDisplayValue={setDisplayValue} />
    </div>
  );
}

export default App;

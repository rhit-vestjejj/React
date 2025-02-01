import validator from 'validator';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function Main() {
  return (
    <header className="App-header">
      <h1>Checking Password String in ReactJS</h1>
      <Body />
    </header>
  );
}

function Body() {
  const [isStrong, setIsStrong] = useState('');

  function handleChange(event) {
    if(validator.isStrongPassword(event, {
     minLength: 8, minLowercase: 1, minUppercase: 1, 
     minNumbers: 1, minSymbols: 1})){
      setIsStrong("Is strong password");
    } else {
      setIsStrong("Is not strong password");
    }
  }

  function Input(){
    return (
      <div>
        Enter password: 
        <input type="text" name="password" id="password" onChange={(e) => handleChange(e.target.value)} />
        <label htmlFor="password" />
      </div>
    );
  }

  function IsStrongText() {
    return (
      <div id = "strongText">
        {isStrong}
      </div>
    );
  }

  return (
    <div>
      <Input />
      <IsStrongText />
    </div>
  );
}

export default App;
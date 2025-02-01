import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <MainBox />
    </div>
  );
}

function MainBox() {
  return (
    <div>
      <header className="App-header">
        <h1 id = "title">Joke Generator Using React and Joke API</h1>
        <Body />
      </header>
    </div>
  );
}

function Body() {
  const [joke, setJoke] = useState();

  function Button() {
    function randomJoke(){
      const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
      };
      setJoke(fetchApi);
    }
  
    return (
      <button onClick = {() => randomJoke()} id = "jokeButton">Click to generate a random joke</button>
    );
  }

  function Joke() {
    return (
      <div id = 'joke'>
        {joke}
      </div>
    );
  }

  return (
    <div>
      <Button />
      <br />
      <br />
      <Joke />
    </div>
  );
}



export default App;

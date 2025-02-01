import './App.css';
import { useState } from 'react';

function App() {
  return (
    <>
      <div style = {{
        textAlign: 'center',
      }}>
        <Main />
      </div>
    </>
  );
}

function Main(){
  const [image1, setImage1] = useState('die1.png');
  const [image2, setImage2] = useState('die1.png');

  function randomInt(){
    setImage1('die' + Math.floor(Math.random() * 6 + 1) + '.png');
    setImage2('die' + Math.floor(Math.random() * 6 + 1) + '.png');
    return;
  }

  function Images(){
    return (
      <div>
        <img src = {image1} alt = 'die1' style = {{
          width: 250,
        }}></img>
        <img src = {image2} alt = 'die2' style = {{
          width: 250,
        }}></img>
      </div>
    )
  }

  function Break({ count }){
    let breaks = [];
    for(let i = 0; i < count; i++){
      breaks.push(<br />);
    }
    return(
      <div>
        {breaks}
      </div>
    );
  }

  function Button(){
    return (
      <button class = "button1" style = {{
        width: 400,
        height: 100,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 10,
        fontSize: 30,
      }} onClick={randomInt}>Roll Dice!</button>
    );
  }

  return (
    <div>
      <Break count = {6} />
      <Images />
      <Break count = {4} />
      <Button />
    </div>
  );
}

export default App;